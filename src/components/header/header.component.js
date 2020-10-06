import React from 'react'
import { Header } from './header.style'
import { Button } from '../../components'
import { Dimensions } from "../../utils";
import { useHistory } from "react-router-dom";
import { Colors } from '../../styles';

const Container = () => {
  const { width } = Dimensions();
  const history = useHistory()
  
  const onClick = () => {
    history.push('movies')
  }

  return (
    <Header width={width} >
      <Button 
        name={"IMDB"} 
        background={Colors.Black}
        onClick={onClick}
      />
      <Button 
        name={"Browse Movies"} 
        color={Colors.SoftGray}
        background={Colors.Black}
        onClick={onClick}
      />
    </Header>
  )
}

export default Container