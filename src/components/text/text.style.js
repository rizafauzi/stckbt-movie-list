import styled from "styled-components";
import { Colors, Fonts } from "../../styles";

export const TextStyle = styled.h1`
line-height: 100%;
flex-direction: row;
margin-bottom: 5px;
margin-top: 5px;
font-family: 'Raleway', sans-serif;
font-size: ${(p) => (p.size ? p.size : Fonts.Medium)}px;
color: ${(p) => (p.color ? p.color : Colors.White)};
font-weight: ${(p) => (p.bold ? "bold" : "normal")};
text-align: ${(p) => (p.align ? p.align : "center")};
`;