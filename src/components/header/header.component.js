import React from 'react'
import { Header } from './header.style'
import { Text } from '../../components'
import { Dimensions } from "../../utils";

const Container = () => {
  const { width } = Dimensions();

  return (
    <Header width={width} >
      <Text align="left" size={18} bold>
        IMDB
      </Text>
    </Header>
  )
}

export default Container