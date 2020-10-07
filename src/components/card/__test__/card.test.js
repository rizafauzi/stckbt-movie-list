

import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../card.component'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement('div')
  ReactDOM.render(<Card />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('it matches snapshot', () => {
  const dataTest = {
    Title :"Batman v Superman: Dawn of Justice",
    Year :"2016",
    imdbID :"tt2975590",
    Type :"movie",
    Poster :"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }
  const tree = renderer.create(<Card data={dataTest} />).toJSON()
  expect(tree).toMatchSnapshot()
})