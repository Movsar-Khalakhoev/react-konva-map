import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"

const FirstZone = () => {
  return (
    <Layer x={200} y={100}>
      <Rect width={78} height={30} stroke='red' strokeWidth={1} />
      <Rect x={4.5} y={2} width={68} height={26} stroke='red' strokeWidth={1} />
      <Line points={[7, 14, 7, 11, 18, 11, 18, 14, 18, 9, 20, 9]} stroke='black' strokeWidth={1} />
      <Line points={[7, 19, 7, 23, 18, 23, 18, 19, 18, 26, 75, 26, 75, 19]} stroke='black' strokeWidth={1} />
      <Line points={[75, 14, 75, 7, 38, 7]} stroke='black' strokeWidth={1} />
      <Line points={[35, 7, 30, 7]} stroke='black' strokeWidth={1} />
      <Line points={[28, 7, 28, 6, 22, 6, 22, 14, 22, 9, 28, 9, 28, 20, 31, 20, 31, 13, 28, 13, 28, 7]} stroke='black' strokeWidth={1} />
      <Text x={40} y={10} text='Зона 1' fontSize={6} />
      <Text x={22} y={16} text='Упаковочная машина 1' fontSize={4.5} />
    </Layer>
  )
}

export default FirstZone
