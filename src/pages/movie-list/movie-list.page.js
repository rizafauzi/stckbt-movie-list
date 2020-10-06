import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";


import APIKit from '../../api'
import { Dimensions } from "../../utils";
import { Colors, Fonts } from '../../styles'
import { Header, Text, Card, Button, TextInput, Modal, Loader } from '../../components'
import { 
  Image,
  Content, 
  Divider, 
  Subheader, 
  Container, 
  CloseButton,
  ModalContent,
  CardContainer, 
  HeaderContent, 
  SearchContainer,
} from './movie-list.style'

import { MOVIE_ACTION, DETAIL_ACTION } from '../../actions'


const MovieList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { width } = Dimensions()

  const dataState = useSelector((state) => state.movie.rows)
  const rowCount = useSelector((state) => state.movie.count)

  
  const loadData = Array.apply(null, Array(4))
  const [pageFetch, setPageFetch] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [splitContent, setSplitContent] = useState(2)
  const [splitLoading, setSplitLoading] = useState(2)
  const [selectedPoster, setSelectedPoster] = useState("")
  const [searchTerm, setSearchTerm] = useState("Superman")
  const [searchInput, setSearchInput] = useState("Superman")
  const [paging, setPaging] = useState({
    skip: 0,
    take: 8
  })

  useEffect(() => {
    dispatch({ type: MOVIE_ACTION.CLEAN_DATA })
    fetchData(pageFetch)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  useEffect(() => {
    const nextSkip = paging.take
    const nextTake = paging.take + 8
    const nextSplit = Math.ceil(dataState.length / 4)
    setSplitContent(nextSplit)
    setPaging({
      skip: nextSkip,
      take: nextTake
    })
  }, [dataState])

  //HANDLER ==========================================================================================================================

  const onChangeText = (payload) => {
    setSearchInput(payload.target.value)
  }

  const onSearch = () => {
    setSplitLoading(2)
    setSearchTerm(searchInput)
    dispatch({ type: MOVIE_ACTION.CLEAN_DATA })
    fetchData(1)
  }

  const onViewDetail = (payload) => {
    dispatch({ 
      type: DETAIL_ACTION.SET_INITIAL,
      payload: {
        data: payload
      }
    })
    history.push('movie-detail');
  }

  const onShowModal = (data) => {
    setSelectedPoster(data ? data.Poster : '')
    setShowModal(true)
  }

  const fetchData = async (page) => {
    const result = await APIKit.get(`?apikey=faf7e5bb&s=${searchInput.split(" ").join("+")}&page=${page}`)
    if(result.data) {
      const nextPage = pageFetch + 1
      setPageFetch(nextPage)
      
      if(splitLoading === 2) {
        dispatch({
          type: MOVIE_ACTION.SET_TOTAL_COUNT,
          payload: {
            data: result.data.totalResults
          },
        })
      }

      dispatch({
        type: MOVIE_ACTION.APPEND_DATA,
        payload: {
          data: result.data.Search
        }
      })

      setSplitLoading(1)
    }
  }

  const handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      fetchData(pageFetch)
    }
  }

  //RENDER ===========================================================================================================================

  const detailModal = () => {
    return (
      <Modal>
        <ModalContent>
          {!selectedPoster || selectedPoster === 'N/A' ?
            <Loader width={'85%'} height={'100%'}/> :
             <Image
              src={selectedPoster}
            />
          }
          
          <CloseButton
            onClick={() => setShowModal(false)}
          >
            <Text color={Colors.Gray} size={Fonts.Large} >X</Text>
          </CloseButton>
        </ModalContent>
      </Modal>
    )
  }

  return (
    <Container>
      {showModal && detailModal()}
      <Header />
      <SearchContainer width={width} >
        <TextInput
          width={'50vh'}
          value={searchInput}
          placeholder="Search Movies"
          onChangeText={onChangeText} 
        />
        <Button 
          shadow
          onClick={onSearch}
          name="Search"
        />
      </SearchContainer>
      <Content>
        <HeaderContent>
          <Subheader>
            <Text align="left" size={Fonts.MidLarge}>
              {'Results for keyword: '}
            </Text>
            <div style={{width: 10}} />
            <Text align="left" size={Fonts.MidLarge} color={Colors.Green} bold>
              {searchTerm.toUpperCase()}
            </Text>
          </Subheader>
          <Subheader>
            <Text align="left" size={Fonts.MidLarge}>
              {!rowCount || rowCount === 0 ? '' : `${rowCount} IMDB Found`}
            </Text>
          </Subheader>
        </HeaderContent>
        <Divider />

        {Array.apply(null, Array(splitContent)).map((_, index) =>
          <CardContainer>
            {dataState.slice(index * 4, (index + 1) * 4 ).map((data, index) => 
              <div key={index}>
                <Card
                  data={data}
                  onShowModal={onShowModal}
                  onViewDetail={onViewDetail}
                />
              </div>
            )}
          </CardContainer>
        )}
        {Array.apply(null, Array(splitLoading)).map(() =>
          <CardContainer>
          {loadData.map((data, index) => 
            <div key={index}>
              <Card
                data={data}
                onViewDetail={onViewDetail}
              />
            </div>
          )}
        </CardContainer>
        )}
      </Content>
    </Container>
  )
}

export default MovieList