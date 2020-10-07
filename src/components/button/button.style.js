import styled from 'styled-components'
import { Colors } from '../../styles'

export const ButtonContainer = styled.button`
  margin: 2%;
  border: none;
  display: flex;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
	align-items: center;
	flex-direction: column;
  justify-content: center;
  padding: 5px 20px 5px 20px;
  font-family: 'Raleway', sans-serif;
  width: ${p => p.width ? p.width : 'auto'};
  font-size: ${(p) => (p.size ? p.size : 20)}px;
  color: ${(p) => (p.color ? p.color : Colors.White)};
  background: ${(p) => (p.background ? p.background : Colors.Green)};
  &:hover {
    cursor: pointer;
    filter: ${(p) => p.shadow && 'drop-shadow(0px 0px 5px #FFFFFF)'};
  };
`