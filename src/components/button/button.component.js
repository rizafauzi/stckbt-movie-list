import React from 'react'
import { ButtonContainer } from './button.style'

const Button = (props) => {
  const {
    color,
    onClick,
    background,
    shadow=false,
    name='Button',
  } = props
  return (
    <ButtonContainer
      color={color}
      shadow={shadow}
      onClick={onClick}
      background={background}
    >
      {name}
    </ButtonContainer>
  )
}

export default Button