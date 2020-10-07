

import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import TextInput from '../text-input.component'
import { render, cleanup, fireEvent } from '@testing-library/react'


afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<TextInput />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('it has a placeholder prop', () => {
  const onChangeTextMock = jest.fn()
  const { getByTestId } = render(
    <TextInput onChange={onChangeTextMock} placeholder="test-placeholder" />,
  )
  const input = getByTestId('text-input')
  expect(input).toHaveProperty('placeholder')
})


it('it matches snapshot', () => {
  const tree = renderer.create(<TextInput />).toJSON()
  expect(tree).toMatchSnapshot()
})