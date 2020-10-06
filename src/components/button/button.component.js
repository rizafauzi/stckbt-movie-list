import React from 'react'
import { ButtonContainer } from './button.style'

const Button = (props) => {
  const {
    onClick,
    name='Button',
  } = props
  return (
    <ButtonContainer
      onClick={onClick}
    >
      {name}
    </ButtonContainer>
  )
}

export default Button