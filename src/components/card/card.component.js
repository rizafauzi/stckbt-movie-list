import React from 'react'
import { Container, ImageContainer, Image, Hover, Wrapper, Background } from './card.style'
import { Text, Button, Loader } from '../../components'
import { Colors } from '../../styles'

const Card = (props) => {
  const {
    data,
    onViewDetail
  } = props
  return (
    <Container>
      <ImageContainer>
        {data ? 
        <Image src={data.Poster} alt="Logo" /> : 
        <Loader width={'30vh'} height={'400px'}  />
        }
        <Hover>
          <Background />
          <Wrapper>
            <Text align="left" size={20} bold>
              {data ? data.Type.toUpperCase() : ""}
            </Text>
            <Button
              onClick={() => onViewDetail(data.imdbID || "")}
              name={'View Detail'}
            ></Button>
          </Wrapper>
        </Hover>
      </ImageContainer>
      {data ? 
        <Text align="left" size={20} bold>
          {data.Title}
        </Text> : 
        <Loader width={'20vh'} height={'20px'}  />
      }
      {
        data ?
        <Text align="left" size={18}>
          {data.Year || ""}
        </Text> :
        <div style={{ marginTop: 10 }}>
          <Loader width={'15vh'} height={'20px'}  />
        </div>
      }
      
    </Container>
  )
}

export default Card