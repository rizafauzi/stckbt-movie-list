

import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../button.component'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders button correctly", () => {
  const { getByTestId } = render(<Button name="Search"/> )
  expect(getByTestId('button')).toHaveTextContent('Search')
})

it('it matches snapshot', () => {
  const tree = renderer.create(<Button name="Search" />).toJSON()
  expect(tree).toMatchSnapshot()
})