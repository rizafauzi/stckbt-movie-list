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
    placeholder="asdasd"
  } = props;
  return (
    <InputStyle 
      bold={bold} 
      size={size} 
      value={text} 
      align={align} 
      width={width}
      onChange={onChangeText} 
      placeholder={placeholder} 
    >
      {children}
    </InputStyle>
  )
}

export default TextInput