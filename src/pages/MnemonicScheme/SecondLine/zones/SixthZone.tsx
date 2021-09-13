import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"

const SixthZone = () => {
  return (
    <Layer x={430} y={200}>
      <Rect width={49.5} height={55} stroke='red' strokeWidth={1} />
      <Rect x={3.5} y={6.5} width={40} height={41} stroke='red' strokeWidth={1} />
      <Line points={[31, 7.6, 45.5, 7.6, 45.5, 46, 30.5, 46, 30.5, 43, 18.5, 43, 18.5, 46, 3.5, 46, 3.5, 7.6, 19, 7.6]} stroke='black' strokeWidth={1} />
      <Line points={[24.5, 43, 24.5, 47]} stroke='black' strokeWidth={1} />
      <Text x={14} y={20} text='Зона 6' fontSize={6} />
      <Text x={12} y={26} text='Штабелер' fontSize={5} />
    </Layer>
  )
}

export default SixthZone
