

import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../header.component'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('it matches snapshot', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})