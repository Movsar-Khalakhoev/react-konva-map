import React from 'react'
import {Layer, Rect} from "react-konva"

const FifthZone = () => {
  return (
    <Layer x={360} y={200}>
      <Rect width={55} height={55} stroke='red' strokeWidth={1} />
      <Rect x={2.5} y={2.5} width={50} height={50} stroke='red' strokeWidth={1} />
    </Layer>
  )
}

export default FifthZone
