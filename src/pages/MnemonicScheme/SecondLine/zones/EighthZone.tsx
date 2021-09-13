import React from 'react'
import {Image, Layer, Line, Rect} from "react-konva"

const EighthZone = () => {

  return (
    <Layer x={570} y={200}>
      <Rect width={56} height={55} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={48} height={49} stroke='red' strokeWidth={1} />
      <Line points={[19.5, 54, 5, 39, 5, 8, 43, 8, 50, 13, 50, 37, 48, 37, 48, 46]} stroke='black' strokeWidth={1} />
      <Line points={[48, 52.5, 48, 54.5]} stroke='black' strokeWidth={1} />
    </Layer>
  )
}

export default EighthZone
