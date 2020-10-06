import styled from "styled-components";
import { Colors } from '../../styles'

export const Children = styled.div`
  width: ${(props) => props.width}px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${ Colors.DarkGray };
  height: ${(props) => props.height - 50}px;
`;
