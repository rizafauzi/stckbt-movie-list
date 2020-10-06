import React from 'react'
import { Container, Background, Wrapper } from './modal.style'

const Modal = (props) => {
  const { children } = props
  return (
    <Container>
      <Background />
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}

export default Modal