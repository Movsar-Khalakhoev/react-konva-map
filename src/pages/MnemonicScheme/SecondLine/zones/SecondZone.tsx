import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const FirstZone = () => {
  return (
    <Layer x={240} y={200}>
      <Rect width={31} height={55} stroke='red' strokeWidth={1} />
      <Rect x={2.3} y={3.7} width={26.6} height={46} stroke='red' strokeWidth={1} />
      <Line points={[14.5, 15, 7.5, 15, 7.5, 30.5]} stroke='black' strokeWidth={1} />
      <Line points={[7.5, 33.5, 7.5, 38.5]} stroke='black' strokeWidth={1} />
      <Line points={[14.8, 40, 14.8, 36, 23.5, 36, 23.5, 40, 6.5, 40, 6.5, 48.5, 6.5, 40, 4, 40, 4, 48.5, 14.8, 48.5]} stroke='black' strokeWidth={1} />
      <Line points={[7.5, 50.5, 7.5, 52.5, 14.8, 52.5]} stroke='black' strokeWidth={1} />
      <Line points={[31, 15, 31, 35, 26.5, 42]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default FirstZone
