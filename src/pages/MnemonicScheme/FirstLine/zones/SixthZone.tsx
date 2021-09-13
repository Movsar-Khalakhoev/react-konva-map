import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const SixthZone = () => {
  return (
    <Layer x={580} y={100}>
      <Rect width={39.5} height={62} stroke='red' strokeWidth={1} />
      <Rect x={3} y={2} width={34} height={57} stroke='red' strokeWidth={1} />
      <Line points={[13, .5, 13, 14]} stroke='black' strokeWidth={1} />
      <Line points={[14, 28, 12, 31, 9, 31, 9, 37, 6, 32, 9, 37, 9, 41, 13, 41, 13, 58.5]} stroke='black' strokeWidth={1} />
      <Line points={[29, .5, 29, 30, 32, 30, 32, 37, 35, 33, 32, 37, 32, 41, 29, 41, 29, 58.5]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default SixthZone
