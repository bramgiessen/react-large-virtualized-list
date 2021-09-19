import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { debounce, requestAnimationFrameSingleRun, calculateVisibleListState } from '../utils.js';

const VirtualizedList = ({ wrapperTagName, wrapperStyle, className, itemHeight, items, renderItem }) => {
  const innerHeight = items.length * itemHeight;
  const TagName = `${wrapperTagName}`;
  const wrapperElRef = useRef();
  const [wrapperElHeight, setWrapperElHeight] = useState(0);
  const [visibleListState, setVisibleListState] = useState({
    visibleStartIndex: 0,
    visibleEndIndex: 0,
    visibleItems: []
  });
  // For better performance, we create a 'debounced' version of our setVisibleListState() method, which will run only once per animation-frame
  const setVisibleListStateDebounced = requestAnimationFrameSingleRun(setVisibleListState);

  /**
   * Whenever this component mounts, we store the height of our list-wrapper-element
   */
  useLayoutEffect(() => {
    resetWrapperElHeight();
  }, []);

  /**
   * Start listening for resize-events when this component mounts
   * We do this so we always know the height of our list-wrapper-element even if the window gets resized
   */
   useEffect(() => {
    // We create a debounced resize-handler for better performance
    const debouncedOnResizeHanlder = debounce(resetWrapperElHeight, 300);
    window.addEventListener('resize', debouncedOnResizeHanlder);

    // Clean-up handler: remove our event-listener for the resize-event
    return () => { window.removeEventListener('resize', debouncedOnResizeHanlder) }
  }, [])

  /**
   * When the height of our list changes, we need to re-calculate which list-items should be visible
   */
  useEffect(() => {
    const { scrollTop } = wrapperElRef.current;
    const visibleListState = calculateVisibleListState(wrapperElHeight, items.length, scrollTop, itemHeight);
    setVisibleListStateDebounced(visibleListState);
  }, [wrapperElHeight])

  /**
   * Handle the onScroll event of our virtualized list
   * Here, we want to recalculate which list-items should be visible while scrolling
   * @param {WheelEvent} event - The event object passed by the onScroll event
   */
  const onScroll = (event) => {
    const { scrollTop } = wrapperElRef.current;
    const visibleListState = calculateVisibleListState(wrapperElHeight, items.length, scrollTop, itemHeight);
    setVisibleListStateDebounced(visibleListState);
  }

  /**
   * Read the height of our wrapper-element and store the value in our componennts' state
   */
  const resetWrapperElHeight = () => {
    if (wrapperElRef.current) {
      setWrapperElHeight(wrapperElRef.current.getBoundingClientRect().height);
    }
  };

  /**
   * Returns an array containing list-items that should be visible given the current scroll-position in our list
   * @returns {array} - Array containing (rendered) list-items which should visible given the current scroll-position in our list
   */
  const renderVisibleItems = () => {
    const { visibleStartIndex, visibleEndIndex } = visibleListState;
    let visibleItems = [];
    for (let i = visibleStartIndex; i <= visibleEndIndex; i++) {
      const style = {
        position: 'absolute', top: `${i * itemHeight}px`, height: `${itemHeight}px`, width: '100%'
      }
      visibleItems.push(renderItem(items[i], style, i));
    }
    return visibleItems;
  };

  return (
    <TagName
      ref={wrapperElRef}
      className={`virtualized-list ${className}`}
      style={wrapperStyle}
      onScroll={onScroll}>
      <div className='inner-wrapper' style={{ position: "relative", height: `${innerHeight}px` }}>
        {renderVisibleItems()}
      </div>
    </TagName>
  );
};

VirtualizedList.propTypes = {
  itemHeight: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func,
  wrapperTagName: PropTypes.string,
  className: PropTypes.string,
  wrapperStyle: PropTypes.object,
};

VirtualizedList.defaultProps = {
  renderItem: (item, style, index) => <li key={index} style={style}>{`Item ${index}`}</li>,
  wrapperTagName: 'ul',
  className: '',
  wrapperStyle: {},
};

export default VirtualizedList;