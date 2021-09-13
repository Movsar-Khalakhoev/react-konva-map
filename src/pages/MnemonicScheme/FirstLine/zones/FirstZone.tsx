import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const FirstZone = () => {
  return (
    <Layer x={200} y={200}>
      <Rect width={31} height={55} stroke='red' strokeWidth={1} />
      <Rect x={2.3} y={3.7} width={26.6} height={46} stroke='red' strokeWidth={1} />
      <Line points={[19, 7.8, 26.7, 7.8, 26.7, 22]} stroke='black' strokeWidth={1} />
      <Line points={[26.7, 26, 26.7, 31]} stroke='black' strokeWidth={1} />
      <Line points={[19, 33, 19, 29.5, 10.5, 29.5, 10.5, 33, 19, 33, 27, 33, 27, 41.5, 19.5, 41.5]} stroke='black' strokeWidth={1} />
      <Line points={[26.7, 43, 26.7, 45.5, 19.5, 45.5]} stroke='black' strokeWidth={1} />
      <Line points={[3.5, 7.8, 3.5, 28, 7.5, 34.8]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default FirstZone
