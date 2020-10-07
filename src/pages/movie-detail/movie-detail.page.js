import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Fonts } from '../../styles'
import { Header, Text, Card } from '../../components'
import { Container, Content, Description, Divider, Tuple, Key, Value, Gradient, ImageBg, Wrapper } from './movie-detail.style'

const MovieDetail = () => {
  const dataState = useSelector((state) => state.detail)
  // const dataState = {
  //   DVD :"N/A",
  //   Plot :"Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
  //   Rated :"PG-13",
  //   Genre :"Action, Adventure, Sci-Fi",
  //   Writer :"Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)",
  //   Actors :"Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg",
  //   Awards :"14 wins & 33 nominations.",
  //   Country :"USA",
  //   Website :"N/A",
  //   Runtime :"152 min",
  //   Response :"True",
  //   Released :"25 Mar 2016",
  //   Director :"Zack Snyder",
  //   Language :"English",
  //   Metascore :"44",
  //   imdbVotes :"614,557",
  //   BoxOffice :"N/A",
  //   Production :"Syncopy, Atlas Entertainment, Warner Bros., Cruel and Unusual, DC Entertainment",
  //   imdbRating :"6.4",
  //   Type :"movie",
  //   Year :"2016",
  //   Title :"Batman v Superman: Dawn of Justice",
  //   Poster :"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //   imdbID :"tt2975590"
  // }

  useEffect(() => {
  }, [dataState])


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
              hideDetail
              data={dataState}
              disable_action
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