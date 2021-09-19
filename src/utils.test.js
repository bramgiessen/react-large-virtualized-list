import { debounce, requestAnimationFrameSingleRun, calculateVisibleListState } from './utils'
describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    // Tell Jest to mock all timeout functions
    jest.useFakeTimers();

    // Create a mock-function, and create a debounced version of it
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Should execute callback function just once, even if called many times within short interval', () => {
    // Call debouncedFunc() 100 times fast after each other 
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    // Fast-forward time until all timers have been executed
    jest.runAllTimers();

    // Even though we called debouncedFunc 100 times fast after each other, we expect 'func()' to only be called once
    expect(func).toBeCalledTimes(1);
  });
});


describe('requestAnimationFrameSingleRun', () => {
  let requestAnimationFrameDebounced;
  beforeEach(() => {
    // Tell Jest to mock all timeout functions
    jest.useFakeTimers();

    // Mock the requestAnimationFrame() method of the browser - as the original method will not work in Jest
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => setTimeout(cb, 10));

    requestAnimationFrameDebounced = requestAnimationFrameSingleRun(() => { });
  });

  afterEach(() => {
    window.requestAnimationFrame.mockRestore();
  });

  it('Should execute just once', () => {
    // Call requestAnimationFrame() 100 times fast after each other 
    for (let i = 0; i < 100; i++) {
      requestAnimationFrameDebounced();
    }

    // Fast-forward time until all timers have been executed
    jest.runAllTimers();

    // Even though we called requestAnimationFrameDebounced 100 times fast after each other, 
    // we expect 'requestAnimationFrame()' to only be called once (after painting of the frame is done)
    expect(requestAnimationFrame).toBeCalledTimes(1);
  });
});


describe('calculateVisibleListState', () => {
  it('Should correctly calculate which list-items should be visible', () => {
    // Given a container with a height of 200px, 10 items, a scrollTop of 0 and an item-height of 50px we expect the first 5 list-items to be visible
    expect(calculateVisibleListState(200, 10, 0, 50)).toEqual({ visibleStartIndex: 0, visibleEndIndex: 4 });

    // Given a container with a height of 200px, 10 items, a scrollTop of 100 and an item-height of 50px we expect items at index 2 until 4 to be visible
    expect(calculateVisibleListState(200, 10, 100, 50)).toEqual({ visibleStartIndex: 2, visibleEndIndex: 6 });

    // Given a container with a height of 200px, 10 items, a scrollTop of 400 and an item-height of 50px we expect only the last 2 items to be visible
    expect(calculateVisibleListState(200, 10, 400, 50)).toEqual({ visibleStartIndex: 8, visibleEndIndex: 9 });
  });
})