import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
	width: 102%;
	display: flex;
	margin-top: -10px;
  align-items: center;
  flex-direction: column;
	justify-content: flex-start;
	background: ${Colors.DarkGray};
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

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	display: flex;
	border-radius: 5px;
	margin: 1% 0% 2% 0%;
	background: ${Colors.Gray};
`

export const HeaderContent = styled.div`
	width: 87%;
  display: flex;
	padding: 2% 5% 0% 5%;
  flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
`

export const Subheader = styled.div`
  display: flex;
  flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`