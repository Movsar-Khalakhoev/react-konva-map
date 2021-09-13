import React from 'react'
import {Layer, Rect, Text} from "react-konva"

const FifthZone = () => {
  return (
    <Layer x={360} y={200}>
      <Rect width={55} height={55} stroke='red' strokeWidth={1} />
      <Rect x={2.5} y={2.5} width={50} height={50} stroke='red' strokeWidth={1} />
      <Text x={17} y={20} text='Зона 5' fontSize={6} />
      <Text x={12} y={26} text='Стрейч-Хууд' fontSize={5} />
    </Layer>
  )
}

export default FifthZone
