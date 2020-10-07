import React from 'react'
import { Text, Button, Loader } from '../../components'
import { Container, ImageContainer, Image, Hover, Wrapper, Background } from './card.style'

const Card = (props) => {
  const {
    data,
    hideDetail,
    onShowModal,
    onViewDetail,
    detailLoading=false,
    disable_action,
  } = props

  return (
    <Container data-testid="card">
      <ImageContainer>
        {!data ? 
        <Loader width={'30vh'} height={'400px'} /> : 
        data.Poster === "N/A" ? 
        <Loader width={'30vh'} height={'400px'} /> :
        <Image src={data.Poster} alt="Logo" /> 
        }
        {!disable_action && data &&
        <Hover>
          <Background />
          <Wrapper
            onMouseUp={() => {
              if(!disable_action && !detailLoading) {
                onShowModal(data)
              }
            }}
          >
            <Text 
              bold 
              size={20} 
              align="left" 
              data-testid="text"
            >
              {data ? data.Type.toUpperCase() : ""}
            </Text>
            <Button
              shadow
              zIndex={100}
              width={'150px'}
              onMouseDown={() => {
                if(!disable_action && !detailLoading) {
                  onViewDetail(data || "")
                }
              }}
              name={detailLoading ? 'Loading...' : 'View Detail'}
            />
          </Wrapper>
        </Hover>}
      </ImageContainer>
      {!hideDetail && 
      <div>
        {data ? 
        <Text 
          bold 
          size={20} 
          align="left" 
          data-testid="text"
        >
          {data.Title}
        </Text> : 
        <Loader width={'20vh'} height={'20px'}  />
      }
      {
        data ?
        <Text 
          size={18} 
          align="left" 
          data-testid="text"
        >
          {data.Year || ""}
        </Text> :
        <div style={{ marginTop: 10 }}>
          <Loader width={'15vh'} height={'20px'}  />
        </div>
      }
      </div>
      }
      
      
    </Container>
  )
}

export default Card