import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"

const EighthZone = () => {

  return (
    <Layer x={570} y={200}>
      <Rect width={56} height={55} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={48} height={49} stroke='red' strokeWidth={1} />
      <Line points={[19.5, 54, 5, 39, 5, 8, 43, 8, 50, 13, 50, 37, 48, 37, 48, 46]} stroke='black' strokeWidth={1} />
      <Line points={[48, 52.5, 48, 54.5]} stroke='black' strokeWidth={1} />
      <Text x={17} y={20} text='Зона 8' fontSize={6}/>
      <Text x={18} y={26} text='Робот 1' fontSize={5} />
    </Layer>
  )
}

export default EighthZone
