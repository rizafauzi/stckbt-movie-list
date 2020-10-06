import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  top: 0px;
	left: 0px;
	width: 100%;
	z-index: 100;
	height: 100vh;
	display: flex;
	position: sticky;
	overflow-x: hidden;
	align-items: center;
	justify-content: center;
	position: '-webkit-sticky';
	overflow-y: hidden;
`

export const Background = styled.div`
	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 100;
	opacity: 0.8;
	height: 100vh;
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
	background: ${Colors.Black};
`

export const Wrapper = styled.div`
	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 100;
	opacity: 1;
	height: 100vh;
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
`