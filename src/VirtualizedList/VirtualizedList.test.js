import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { VirtualizedList } from '..'

describe('VirtualizedList', () => {
  /**
   * Code inside beforeEach() gets run before every test
   * We need to setup some mocked methods before every test, as these methods don't work properly in Jest
   */
  beforeEach(() => {
    // We need to mock the height of our container DOM element, as Jest will not actually render the element
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 200,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }
    });

    // Mock the requestAnimationFrame() method of the browser - as the original method will not work in Jest
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
  });

  /**
   * Code inside afterEach() gets run after every test
   * (e.g. cleaning up of mocked methods)
   */
  afterEach(() => {
    window.requestAnimationFrame.mockRestore();
  });

  /**
   * Get the JSX of our VirtualizedList component, so it can easily & consistently be rendered in our unit tests
   * @param {object} props - Props to be passed into the VirtualizedList component 
   * @returns {undefined}
   */
  function getComponentJSX(props = {}) {
    return (
      <VirtualizedList
        items={props.items}
        itemHeight={props.itemHeight}
        className={props.className}
        wrapperStyle={props.wrapperStyle}
      />
    )
  };

  describe('Rendering children', () => {
    it('Should not render more children than is needed to fill the view', () => {
      render(getComponentJSX({ items: [...Array(100)], itemHeight: 10 }));
      // With a list-height of 120 pixels, and an item-height of 10 pixels: 
      // we expect that there are not more than 12 items rendered at any given time
      expect(screen.queryByText('Item 0')).toBeInTheDocument();
      expect(screen.queryByText('Item 2')).toBeInTheDocument();
      expect(screen.queryByText('Item 13')).toBeNull();
    })

    it('should not render more children than available if the list is not filled', () => {
      render(getComponentJSX({ items: [...Array(10)], itemHeight: 10 }));
      // We expect at most 10 items to be rendered, as we don't have more list-items in this case
      expect(screen.queryByText('Item 10')).toBeNull();
    });

    it('Should not render less children than is needed to fill the view', () => {
      render(getComponentJSX({ items: [...Array(20)], itemHeight: 10 }));
      // With a list-height of 120 pixels, and an item-height of 10 pixels: we expect at least 12 items to be rendered at any given time
      expect(screen.queryByText('Item 12')).toBeInTheDocument();
    })

    it('After scrolling down, children that are positioned before the current scrollTop should no longer be rendered', () => {
      const {container} = render(getComponentJSX({ items: [...Array(50)], itemHeight: 10 }));

      // We manually update the scrollTop value of our VirtualizedList component, and then fire an arbitrary scroll-event 
      // to trigger the scroll-event listener inside the VirtualizedList component
      const scrollValue = 100;
      container.firstChild.scrollTop = scrollValue;
      fireEvent.scroll(container.firstChild);

      // As we scrolled down 100px down and our list-items are 10px high, we expect that:
      // - Items 0 until 9 are no longer rendered
      // - Items 10 until 22 are rendered
      // - Items 23 and beyond are not rendered (these lie beyond our current visible viewport)
      expect(screen.queryByText('Item 9')).toBeNull();
      expect(screen.queryByText('Item 10')).toBeInTheDocument();
      expect(screen.queryByText('Item 22')).toBeInTheDocument();
      expect(screen.queryByText('Item 23')).toBeNull();
    })
  });


  describe('Passing styles and classNames', () => {
    it('Should render with the predefined CSS className', () => {
      const {container} = render(getComponentJSX({ items: [...Array(5)], itemHeight: 10 }));
      expect(container.firstChild).toHaveClass('virtualized-list')
    });

    it('Should use custom classname passed in through the components\' props if specified', () => {
      const {container} = render(getComponentJSX({ items: [...Array(5)], itemHeight: 10, className: 'custom-list' }));
      expect(container.firstChild).toHaveClass('custom-list')
    });

    it('Should use custom styling passed in through the components\' props if specified', () => {
      const {container} = render(getComponentJSX({ items: [...Array(5)], itemHeight: 10, wrapperStyle: {backgroundColor: 'red'} }));
      expect(container.firstChild).toHaveStyle('background-color: red');
    });
  });
})