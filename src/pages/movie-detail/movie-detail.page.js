import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import APIKit from '../../api'
import { Fonts } from '../../styles'
import { Header, Text, Card } from '../../components'
import { Container, Content, Description, Divider, Tuple, Key, Value, Gradient, ImageBg, Wrapper } from './movie-detail.style'

import { DETAIL_ACTION } from '../../actions'


const MovieDetail = () => {
  const dispatch = useDispatch()
  const dataState = useSelector((state) => state.detail)

  const onViewDetail = (payload) => {
    console.log('payload: ', payload)
  }
  
  useEffect(() => {
  }, [dataState])

  useEffect(() => {
    fetchData()
  }, [])

  //HANDLER ==========================================================================================================================

  const fetchData = async () => {
    console.log(`?apikey=faf7e5bb&i=${dataState.imdbID}&plot=full`)
    const result = await APIKit.get(`?apikey=faf7e5bb&i=${dataState.imdbID}&plot=short`)
    console.log('result: ', result)
    if(result.data) {
      console.log(result.data)
      dispatch({
        type: DETAIL_ACTION.SET_DATA,
        payload: result.data
      })
    }
  }

  //RENDER ===========================================================================================================================

  const Tuples = (key, value) => {
    return (
      <Tuple>
        <Key>
          <Text bold size={Fonts.ExtraSmall} >{key}</Text>
        </Key>
        <Value>
          <Text size={Fonts.ExtraSmall} >{!value ? '-' : value.length > 500 ? `${value.slice(0, 250)}...` : value}</Text>
        </Value>
      </Tuple>
    )
  }
  
  return (
    <Container>
      <Header />
      <Content>
        <ImageBg src={dataState.Poster} />
        <Gradient />
        <Wrapper>
          <div>
            <Card
              detail
              hideDetail
              data={dataState}
              onViewDetail={onViewDetail}
            />
            <div style={{margin: '3vh'}}>
              {Tuples('Rated', dataState.Rated)} 
              {Tuples('Released', dataState.Released)} 
              {Tuples('Runtime', dataState.Runtime)} 
            </div>
          </div>
          <Description>
            <Text bold size={Fonts.ExtraLarge} >{dataState.Title}</Text>
            <Text size={Fonts.Medium} >{dataState.Year}</Text>
            <Text size={Fonts.Medium} >{dataState.Genre}</Text>
            <Text size={Fonts.ExtraSmall} >{dataState.Plot}</Text>
            <Divider />
            <Text bold size={Fonts.Large} >Ratings</Text>
            {dataState.Ratings && dataState.Ratings.length > 0 && dataState.Ratings.map(dt => 
              Tuples(dt.Source, dt.Value)
            )} 
            {Tuples('IMB Votes', dataState.imdbVotes)}
            {Tuples('IMDB Rating', dataState.imdbRating)}
            <Divider />
            {Tuples('Director', dataState.Director)}
            {Tuples('Writer', dataState.Writer)}
            {Tuples('Actors', dataState.Actors)}
            {Tuples('Production', dataState.Production)}
            {Tuples('Awards', dataState.Awards)}
            <Divider />
            {Tuples('Language', dataState.Language)}
            {Tuples('Country', dataState.Country)}
          </Description>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default MovieDetail