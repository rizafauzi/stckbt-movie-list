import React, { useState, useEffect } from 'react'

import APIKit from '../../api'
import { Fonts } from '../../styles'
import { Dimensions } from "../../utils";
import { Header, Text, Card, Button, TextInput } from '../../components'
import { Container, Content, CardContainer, SearchContainer } from './movie-list.style'


const MovieList = () => {
  const { width } = Dimensions();
  const [searchInput, setSearchInput] = useState("Batman")
  const [reach, setReach] = useState("")
  const [dataState, setDataState] = useState(Array.apply(null, Array(8)).map(() => {}))

  const onViewDetail = (payload) => {
    console.log('payload: ', payload)
  }
  
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  useEffect(() => {
    fetchData()
  }, [])

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
      <SearchContainer width={width} >
        <div style={{ marginRight: '2vh' }} >
          <Text align="left" size={Fonts.Medium} bold>
            Search Movies
          </Text>
        </div>
        <TextInput
          width={'50vh'}
          value={searchInput}
          placeholder="Search Movies"
          onChangeText={onChangeText} 
        />
        <Button 
          onClick={onSearch}
          name="Search"
        />
      </SearchContainer>
      <Content>
        <Text align="left" size={Fonts.Medium} bold>
          Welcome to IMDB ID
        </Text>
        <CardContainer>
          {dataState.slice(0, 4).map((data, index) => 
            <div key={index}>
              <Card
                data={data}
                onViewDetail={onViewDetail}
              />
            </div>
          )}
        </CardContainer>
        <CardContainer>
          {dataState.slice(4, 8).map((data, index) => 
            <div key={index}>
              <Card
                data={data}
                onViewDetail={onViewDetail}
              />
            </div>
          )}
        </CardContainer>
      </Content>
    </Container>
  )
}

export default MovieList