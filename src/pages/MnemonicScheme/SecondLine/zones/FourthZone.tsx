import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const FourthZone = () => {
  return (
    <Layer x={320} y={200}>
      <Rect width={24.5} height={24} stroke='red' strokeWidth={1} />
      <Rect x={2.3} y={3} width={20} height={18} stroke='red' strokeWidth={1} />
      <Line points={[4, 4.5, 20, 4.5]} stroke='black' strokeWidth={1} />
      <Line points={[19, 11, 19, 24, 4, 24]} stroke='black' strokeWidth={1} />
      <Line points={[]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default FourthZone
