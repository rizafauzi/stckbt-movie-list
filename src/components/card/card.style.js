import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
	width: 30vh;
	margin: 3vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-overflow: ellipsis;
	justify-content: flex-start;
`

export const Hover = styled.div`
	opacity: 0;
	width: 30vh;
	height: 400px;
	position: absolute;
	border-radius: 5px;
	border: 5px solid ${Colors.Green};
`

export const Background = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	border-radius: 5px;
	background: ${Colors.Black};
`

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	position: absolute;
	border-radius: 5px;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
`

export const ImageContainer = styled.div`
	width: 30vh;
	height: 400px;
	display: flex;
	margin-bottom: 10px;
	border-radius: 5px;
	align-items: center;
	justify-content: flex-start;
	background: ${Colors.White};
	box-shadow: 0px 2px 10px black;
	&:hover ${Hover} {
		opacity: 1;
	}
	&:hover ${Background} {
		opacity: 0.7;
	}
`

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
`

