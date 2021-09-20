import React, { Component } from 'react'
import { render } from 'react-dom'
import { VirtualizedList } from '../../src'

// We generate some dummy list-itmes
const dummyListItems = [...Array(100)];
class Demo extends Component {
  render() {
    return <div>
      <h1>VirtualizedList Demo</h1>
      <VirtualizedList
        items={dummyListItems}
        itemHeight={50}
        overscanRowCount={10}
        className={'custom-list'}
        renderItem={(item, style, index) =>  <li key={index} style={style}>{`Item ${index}`}</li>}
      />
    </div>
  }
}
render(<Demo />, document.querySelector('#demo'))
