import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
	width: 100%;
	display: flex;
  align-items: center;
  flex-direction: column;
	background: ${Colors.DarkGray};
	justify-content: flex-start;
`

export const Content = styled.div`
  width: 80%;
  display: flex;
	align-items: center;
  flex-direction: column;
	justify-content: flex-start;
	background: ${Colors.DarkGray};
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
align-items: flex-start;
flex-direction: row;
justify-content: center;
background: ${Colors.DarkGray};
`