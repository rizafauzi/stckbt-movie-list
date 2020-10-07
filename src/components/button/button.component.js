import React from 'react'
import { ButtonContainer } from './button.style'

const Button = (props) => {
  const {
    width,
    color,
    onClick,
    onMouseDown,
    background,
    shadow=false,
    name='Button',
  } = props
  return (
    <ButtonContainer
      data-testid="button"
      color={color}
      width={width}
      shadow={shadow}
      onClick={onClick}
      background={background}
      onMouseDown={onMouseDown}
    >
      {name}
    </ButtonContainer>
  )
}

export default Button