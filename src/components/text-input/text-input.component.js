import React from 'react'
import { InputStyle } from './text-input.style'

const TextInput = (props) => {
  const { 
    bold, 
    size, 
    text,
    align, 
    width,
    children, 
    onChangeText,
    onKeyPressed,
    placeholder="test"
  } = props;

  return (
    <InputStyle 
      bold={bold} 
      size={size} 
      value={text} 
      align={align} 
      width={width}
      onKeyUp={onKeyPressed}
      data-testid="text-input"
      onChange={onChangeText} 
      placeholder={placeholder} 
    >
      {children}
    </InputStyle>
  )
}

export default TextInput