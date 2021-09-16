// import expect from 'expect'
// import React from 'react'
// import { render, unmountComponentAtNode } from 'react-dom'
// import { VirtualizedList } from 'src/'

// describe('VirtualizedList', () => {
//   let node

//   beforeEach(() => {
//     node = document.createElement('div')
//   })

//   afterEach(() => {
//     unmountComponentAtNode(node)
//   })

//   it('should render the VirtualizedList', () => {
//     const dummyListItems = [...Array(10)];
//     render(
//       <VirtualizedList
//         items={dummyListItems}
//         itemHeight={100}
//         wrapperStyle={{position: 'absolute', height: '400px', width: '400px'}}
//       />, node, () => {
//         expect(node.innerHTML).toContain('Item 0');
//         expect(node.innerHTML).toContain('Item 1');
//         expect(node.innerHTML).toNotContain('Item 5');
//       })
//   })
// })


// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import { VirtualizedList } from '../src'

test('shows the children when the checkbox is checked', () => {
  const dummyListItems = [...Array(10)];
  render(   <VirtualizedList
            items={dummyListItems}
            itemHeight={100}
            wrapperStyle={{position: 'absolute', height: '400px', width: '400px'}}
          />)

  expect(screen.getByText('Item 0')).toBeInTheDocument()
})