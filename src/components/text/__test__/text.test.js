

import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom'
import Text from '../text.component'
import renderer from 'react-test-renderer'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<Text />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders text correctly", () => {
  const { getByTestId } = render(<Text children="Test Text"/> )
  expect(getByTestId('text')).toHaveTextContent('Test Text')
})


it('it matches snapshot', () => {
  const tree = renderer.create(<Text />).toJSON()
  expect(tree).toMatchSnapshot()
})