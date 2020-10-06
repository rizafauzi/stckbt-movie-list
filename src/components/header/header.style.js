import styled from 'styled-components'
import { Colors } from '../../styles'

export const Header = styled.div`
	width: ${(props) => props.width}px;
	top: 0;
	right: 0;
	align-items: center;
	background: ${Colors.White};
	justify-content: flex-start;
	box-shadow: 1px 2px 10px #9e9e9e;
`