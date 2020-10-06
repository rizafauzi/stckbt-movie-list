import styled from 'styled-components'
// import { Colors } from '../../styles'

const Skeleton = styled.div`
display: inline-block;
height: 100%;
width: 100%;
background: linear-gradient(-90deg, #333333 0%, #444444 50%, #333333 100%);
background-size: 400% 400%;
animation: pulse 1.2s ease-in-out infinite;
@keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
`;

export const SkeletonLoading = styled(Skeleton)`
  border-radius: 5px;
  height: ${props => props.height ? props.height : '100px'};
  width: ${props => props.width ? props.width : '100px'};

  &::before {
    content: "\00a0";
  }
`;