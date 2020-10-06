import styled from "styled-components";
import { Colors, Fonts } from "../../styles";

export const TextStyle = styled.h1`
flex-direction: row;
margin-bottom: 5px;
margin-top: 5px;
font-family: 'Poppins', sans-serif;
font-weight: ${(p) => (p.bold ? 600 : 400)};
text-align: ${(p) => (p.align ? p.align : "left")};
color: ${(p) => (p.color ? p.color : Colors.White)};
font-size: ${(p) => (p.size ? p.size : Fonts.Medium)}px;
line-height: ${(p) => (p.lineHeight ? p.lineHeight : '140%')};  
`;