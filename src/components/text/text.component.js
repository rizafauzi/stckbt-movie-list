import React from 'react'
import { TextStyle } from './text.style'

const Text = (props) => {
  const { children, bold, align, size } = props;
  return (
    <TextStyle bold={bold} size={size} align={align}>{children}</TextStyle>
  )
}

export default Text