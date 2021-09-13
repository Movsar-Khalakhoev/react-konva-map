import React from 'react'
import {Layer, Rect, Text} from "react-konva"

const FifthZone = () => {
  return (
    <Layer x={520} y={100}>
      <Rect width={47} height={52} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={37} height={46} stroke='red' strokeWidth={1} />
      <Text x={13} y={20} text='Зона 5' fontSize={6} />
      <Text x={8} y={26} text='Стрейч-Хууд' fontSize={5} />
    </Layer>
  )
}

export default FifthZone
