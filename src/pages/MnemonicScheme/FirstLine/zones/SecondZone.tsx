import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"

const SecondZone = () => {
  return (
    <Layer x={300} y={100}>
      <Rect width={78} height={30} stroke='red' strokeWidth={1} />
      <Rect x={4.5} y={2} width={68} height={26} stroke='red' strokeWidth={1} />
      <Line points={[7, 9, 7, 5, 18, 5, 18, 9, 18, 3, 75, 3, 75, 9]} stroke='black' strokeWidth={1} />
      <Line points={[75, 14, 75, 21, 39, 21]} stroke='black' strokeWidth={1} />
      <Line points={[34, 21, 29, 21]} stroke='black' strokeWidth={1} />
      <Line points={[28, 15, 31, 15, 31, 8, 28, 8, 28, 22, 22, 22, 22, 15]} stroke='black' strokeWidth={1} />
      <Line points={[7, 14, 7, 18, 18, 18, 18, 14, 18, 20, 21, 20]} stroke='black' strokeWidth={1} />
      <Text x={40} y={7} text='Зона 2' fontSize={6} />
      <Text x={23} y={13} text='Упаковочная машина 2' fontSize={4.5} />
    </Layer>
  )
}

export default SecondZone
