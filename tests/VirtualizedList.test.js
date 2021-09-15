import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import { VirtualizedList } from 'src/'

describe('CoolButton', () => {
  let node

beforeEach(() => {
    node = document.createElement('div')
  })

afterEach(() => {
    unmountComponentAtNode(node)
  })

it('should render the VirtualizedList', () => {
    render(<VirtualizedList>Cool</VirtualizedList>, node, () => {
      expect(node.innerHTML).toContain('Cool')
    })
  })
})