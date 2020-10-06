import React, { useState, useEffect } from 'react'

import APIKit from '../../api'
import { Fonts } from '../../styles'
import { Dimensions } from "../../utils";
import { Header, Text, Card, Button, TextInput } from '../../components'
import { Container, Content } from './movie-detail.style'


const MovieDetail = () => {
  const { width } = Dimensions();
  const [searchInput, setSearchInput] = useState("Batman")
  const [reach, setReach] = useState("")
  const [dataState, setDataState] = useState({
    "Title": "Batman: The Killing Joke",
    "Year": "2016",
    "Rated": "R",
    "Released": "25 Jul 2016",
    "Runtime": "76 min",
    "Genre": "Animation, Action, Crime, Drama, Thriller",
    "Director": "Sam Liu",
    "Writer": "Brian Azzarello, Brian Bolland (based on the graphic novel illustrated by), Bob Kane (Batman created by), Bill Finger (Batman created by)",
    "Actors": "Kevin Conroy, Mark Hamill, Tara Strong, Ray Wise",
    "Plot": "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 win & 2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "6.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "40%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "6.4",
    "imdbVotes": "48,027",
    "imdbID": "tt4853102",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Warner Bros.",
    "Website": "N/A",
    "Response": "True"
  })

  const onViewDetail = (payload) => {
    console.log('payload: ', payload)
  }
  
  
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  // })

  // useEffect(() => {
  //   fetchData()
  // }, [])

  //HANDLER ==========================================================================================================================

  const fetchData = async () => {
    console.log(`?apikey=faf7e5bb&s=${searchInput}&page=1`)
    const result = await APIKit.get(`?apikey=faf7e5bb&s=${searchInput}&page=1`)
    console.log('result: ', result)
    if(result.data) {
      setDataState(result.data.Search);
    }
  }

  const onChangeText = (payload) => {
    setSearchInput(payload.target.value)
  }

  const onSearch = () => {
    console.log('KE TRIGGER GAN')
    setDataState(Array.apply(null, Array(8)).map(() => {}))
    fetchData()
  }

  const handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setReach('bottom reached')
    } else {
      setReach('not at bottom')
    }
  }

  //RENDER ===========================================================================================================================

  return (
    <Container>
      <Header />
      <Content>
        <Text align="left" size={Fonts.Medium} bold>
          Welcome to IMDB ID
        </Text>
        <Card
          data={dataState}
          onViewDetail={onViewDetail}
        />
      </Content>
    </Container>
  )
}

export default MovieDetail