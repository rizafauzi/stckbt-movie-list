

import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom'
import Loader from '../loader.component'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<Loader />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('it matches snapshot', () => {
  const tree = renderer.create(<Loader />).toJSON()
  expect(tree).toMatchSnapshot()
})