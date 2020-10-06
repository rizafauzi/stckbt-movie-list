import React from 'react'
import { ButtonContainer } from './button.style'

const Button = (props) => {
  const {
    onClick,
    background,
    shadow=false,
    name='Button',
  } = props
  return (
    <ButtonContainer
    shadow={shadow}
    onClick={onClick}
      background={background}
    >
      {name}
    </ButtonContainer>
  )
}

export default Button