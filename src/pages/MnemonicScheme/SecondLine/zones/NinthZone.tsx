import React from 'react'
import {Layer, Line, Rect} from "react-konva"

const NinthZone = () => {
  return (
    <Layer x={640} y={200}>
      <Rect width={56} height={55} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={48} height={49} stroke='red' strokeWidth={1} />
      <Line points={[20, 1, 5, 16, 5, 47, 38, 47]} stroke='black' strokeWidth={1} />
      <Line points={[44, 47, 51, 42, 51, 18, 49, 18, 49, 9]} stroke='black' strokeWidth={1} />
      <Line points={[49, 2.5, 49, .5]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default NinthZone
