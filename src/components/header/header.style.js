import styled from 'styled-components'
import { Colors } from '../../styles'

export const Header = styled.div`
	top: 0;
	right: 0;
	height: 7vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${Colors.MidGray};
	width: ${(props) => props.width}px;
	border-bottom: 0.5px solid ${Colors.Gray};
`
export const ButtonHome = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${Colors.MidGray}
`