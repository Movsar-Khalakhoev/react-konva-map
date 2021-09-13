import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const ThirdZone = () => {
  return (
    <Layer x={400} y={100}>
      <Rect width={47} height={52} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={37} height={46} stroke='red' strokeWidth={1} />
      <Line points={[5, 18, 5, 15, 7, 15]} stroke='black' strokeWidth={1} />
      <Line points={[19, 4, 19, 15, 19, 11, 39, 11, 39, 19]} stroke='black' strokeWidth={1} />
      <Line points={[39, 12, 43, 17]} stroke='black' strokeWidth={1} />
      <Line points={[5, 34, 5, 40, 7, 40]} stroke='black' strokeWidth={1} />
      <Line points={[19, 40, 21, 42, 39, 42, 39, 34]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default ThirdZone
