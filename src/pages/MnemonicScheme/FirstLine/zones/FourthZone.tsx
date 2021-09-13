import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const FourthZone = () => {
  return (
    <Layer x={460} y={100}>
      <Rect width={47} height={52} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={37} height={46} stroke='red' strokeWidth={1} />
      <Line points={[9, 20, 9, 22, 10, 22, 10, 36]} stroke='black' strokeWidth={1} />
      <Line points={[13, 36, 13, 22, 15, 22, 15, 51.5]} stroke='black' strokeWidth={1} />
      <Line points={[18, 51.5, 18, 35, 21, 35]} stroke='black' strokeWidth={1} />
      <Line points={[31, 51.5, 31, 35, 28, 35, 31, 35, 31, 23, 39, 23, 39, 20]} stroke='black' strokeWidth={1} />
      <Line points={[]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default FourthZone