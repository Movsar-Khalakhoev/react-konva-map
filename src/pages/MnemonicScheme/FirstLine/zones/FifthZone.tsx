import React from 'react'
import {Layer, Rect} from "react-konva"

const FifthZone = () => {
  return (
    <Layer x={520} y={100}>
      <Rect width={47} height={52} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={37} height={46} stroke='red' strokeWidth={1} />
    </Layer>
  )
}

export default FifthZone
