# react-large-virtualized-list

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![codecov](https://codecov.io/gh/bramgiessen/react-large-virtualized-list/branch/main/graph/badge.svg)](https://codecov.io/gh/bramgiessen/react-large-virtualized-list)

[build-badge]: https://img.shields.io/travis/bramgiessen/react-large-virtualized-list/main.png?style=flat-square
[build]: https://travis-ci.com/github/bramgiessen/react-large-virtualized-list

[npm-badge]: https://img.shields.io/npm/v/react-large-virtualized-list.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-large-virtualized-list



A Virtual vertical list component for React. Display thousands of list-items without compromising performance!

## Overview

This component allows to create very big/long lists that work extremely fast. This is achieved by only rendering the
part of the list that is visible in the viewport.

## Demo

* [Interactive Demo in StoryBook](https://bramgiessen.github.io/react-large-virtualized-list/?path=/docs/virtualizedlist--hundred-items)


## Getting started

Install `react-large-virtualized-list` using npm.

```shell
npm install react-large-virtualized-list --save
```

Then you can just import like so:

```js
import VirtualizedList from 'react-large-virtualized-list';

// Now you can use <VirtualizedList {...props} />
```

### Example

```javascript
import VirtualizedList from 'react-large-virtualized-list';
...

let items = [];

for (var i = 0; i < 1000; i++) {
  items.push({ id: Math.random(), title: `I am item ${i}` });
}

function renderItem(item, style, index) {
  return <div key={item.id} style={style}>{item.title}</div>;
}

const wrapperStyle = { 'height': '300px', 'width': '100%', 'overflow': 'auto', 'position': 'absolute' }

<VirtualizedList
  wrapperTagName="div"
  items={items}
  renderItem={renderItem}
  itemHeight={20}
  overscanRowCount={10}
  wrapperStyle={wrapperStyle}
/>
```

## Proptypes

The component accepts the following props:

* `items` (`array`, required) - array of all list items.
* `itemHeight` (`number`, required) - the height of a list-item in pixels.
* `wrapperTagName` (`string`, default: `[]`) - Tag-name used for the root-element of the component.
* `renderItem` 
   (`function`, default: `(item, style, index) => <li key={index} style={style}>{Item ${index}}</li>`) - 
   The function that receives an item and a style-object as param and renders a single list item. 
   **Note: Every rendered list-item must have the passed `styles`   object applied in order to render correctly!**
* `overscanRowCount` (`number`, default: `0`) - the number of items that may be rendered before and after the visible part of the list.
* `wrapperStyle` (`object`, default: `{}`) - Object containing css-styles that should be applied to the root-element of the component
* `className` (`string`, default: `''`) - Classname that will be applied to the root-element of the component


## License

_react-large-virtualized-list_ is available under the MIT License.
