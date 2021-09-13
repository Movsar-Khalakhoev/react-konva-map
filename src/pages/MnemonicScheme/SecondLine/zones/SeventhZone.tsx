import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const FirstZone = () => {
  return (
    <Layer x={500} y={200}>
      <Rect width={54} height={35} stroke='red' strokeWidth={1} />
      <Rect x={2.5} y={3.7} width={47.5} height={27} stroke='red' strokeWidth={1} />
      <Line points={[10, 0.5, 10, 24, 53.5, 24]} stroke='black' strokeWidth={1} />
      <Line points={[10, 6, 0.5, 6]} stroke='black' strokeWidth={1} />
      <Line points={[10, 8, 0.5, 8]} stroke='black' strokeWidth={1} />
      <Line points={[35, 0.5, 35, 24]} stroke='black' strokeWidth={1} />
      <Line points={[37, 0.5, 37, 24]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default FirstZone