import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const SeventhZone = () => {
  return (
    <Layer x={630} y={100}>
      <Rect width={39.5} height={26} stroke='red' strokeWidth={1} />
      <Rect x={3} y={3} width={34} height={20} stroke='red' strokeWidth={1} />
      <Line points={[11, 11, 10, 11, 10, 25.5]} stroke='black' strokeWidth={.5} />
      <Line points={[11.5, 7, 11.5, 19, 12, 19, 12, 25.5, 12, 19, 27, 19, 27, 25.5]} stroke='black' strokeWidth={.5} />
      <Line points={[11, 19, 11, 25.5]} stroke='black' strokeWidth={.5} />
      <Line points={[27.5, 7, 27.5, 11, 39, 11, 27.5, 11, 27.5, 25.5]} stroke='black' strokeWidth={.5} />
      <Line points={[28, 18.8, 28, 25.5]} stroke='black' strokeWidth={.5} />
    </Layer>
  )
}

export default SeventhZone
