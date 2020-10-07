import React from 'react'
import { TextStyle } from './text.style'

const Text = (props) => {
  const { children, bold, align, size, lineHeight, color } = props;
  return (
    <TextStyle 
      bold={bold} 
      size={size} 
      align={align} 
      color={color} 
      data-testid="text"
      lineHeight={lineHeight} 
    >
      {children}
    </TextStyle>
  )
}

export default Text