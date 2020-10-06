import styled from "styled-components";
import { Colors, Fonts } from "../../styles";

export const InputStyle = styled.input`
  border-width: 0px;
  background: none;
  width: ${props => props.width ? props.width : '20vh'};
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.Green};
  color: ${Colors.White};
  font-family: 'Raleway', sans-serif;
  font-size: ${(p) => (p.size ? p.size : Fonts.Medium)}px;
  &:focus {
      outline: none;
      border-bottom-width: 1px;
      border-bottom-color: ${Colors.Green};
  }
`;