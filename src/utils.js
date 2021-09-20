/**
 * A simple, custom debounce function
 * @param {function} func - The function we wish to debounce
 * @param {number} timeout - Debounce-duation in milliseconds
 * @returns {function} - A debounced version of the function supplied in our parameters
 */
export const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

/**
 * Ensure that 'requestAnimationFrame()' is called only once per frame - so that we don't build up a queue of callback-methods
 * @param {Function} callback - Callback function that will be passed to requestAnimationFrame() 
 * @returns 
 */
export const requestAnimationFrameSingleRun = (callback) => {
    var rafScheduled = false;

    const callbackWrapper = function callbackWrapper() {
        callback(...arguments);
        rafScheduled = false;
    };

    return function requestAnimationFrameSingleRun() {
        if (!rafScheduled) {
            requestAnimationFrame(() => callbackWrapper(...arguments));
            rafScheduled = true;
        }
    }
}

/**
 * Calculate the start & end-indexes of the list-items that should be rendered given the current scroll-position of our virtual-list
 * @param {number} listHeight - Height of our virtualized list in pixels
 * @param {number} amountOfItems - Total amount of list-items available
 * @param {number} overscanRowCount - Amount of items / rows we want to render before & after our visible items / rows
 * @param {number} scrollTop - The scrollTop position of our virtualized list
 * @param {number} itemHeight - The height in pixels of each list-item
 * @returns {renderedStartIndex: number, renderedEndIndex: number} - Object representing the start & end indexes of the rendered list-items
 */
export const calculateRenderedItemsState = (listHeight, amountOfItems, overscanRowCount, scrollTop, itemHeight) => {
    let state = {
        renderedStartIndex: 0,
        renderedEndIndex: 0,
    }

    if (!listHeight || !itemHeight) {
        return state;
    }

    // -- Calculate which elements we should render, given the current scroll-position in the list
    const visibleItemsCount = Math.ceil(listHeight / itemHeight) + 1;
    const visibleStartIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
    state.renderedStartIndex = Math.max(0, visibleStartIndex - overscanRowCount);
    state.renderedEndIndex = Math.min(
        amountOfItems - 1, // don't render past the end of the list
        (visibleStartIndex + visibleItemsCount + overscanRowCount) - 1
    );

    return state;
}