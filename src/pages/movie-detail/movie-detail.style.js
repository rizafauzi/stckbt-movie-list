import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
	width: 104%;
	display: flex;
	margin-top: -10px;
  align-items: center;
  flex-direction: column;
	background: ${Colors.DarkGray};
	justify-content: flex-start;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
	align-items: flex-start;
	justify-content: center;
	background: ${Colors.Green};
`

export const Wrapper = styled.div`
	width: 100%;
  display: flex;
	position: absolute;
	align-items: flex-start;
	justify-content: center;
`

export const Gradient = styled.div`
  width: 100%;
	height: 93vh;
  display: flex;
	position: absolute;
	align-items: flex-start;
	justify-content: center;
	backdrop-filter: blur(10px);
	background-image: linear-gradient(180deg, rgba(30,30,30,0.7), rgba(30,30,30,1), rgba(30,30,30,1));
`

export const ImageBg = styled.img`
	width: 100%;
	height: 93vh;
	object-fit: cover;
	position: absolute;
	border-radius: 5px;
`

export const SearchContainer = styled.div`
  display: flex; 
  align-items: center;
	justify-content: center;
	background: ${Colors.Black};
  width: ${props => props.width}px;
`

export const CardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	background: ${Colors.DarkGray};
`

export const Description = styled.div`
	width: 50%;
	padding: 5vh;
	z-index: 5;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`

export const Divider = styled.div`
	margin: 2% 0% 2% 0%;
	width: 100%;
	height: 1px;
	border-radius: 5px;
	background: ${Colors.Gray};
	display: flex;
`

export const Tuple = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`

export const Key = styled.div`
	width: 30%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`

export const Value = styled.div`
	width: 70%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`