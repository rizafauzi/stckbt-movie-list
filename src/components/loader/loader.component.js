
import React from 'react'
import { SkeletonLoading } from './loader.style'

const Loader = (props) => {
  const {
    width,
    height
  } = props
  return (
    <SkeletonLoading height={height} width={width} />
  )
}

export default Loader