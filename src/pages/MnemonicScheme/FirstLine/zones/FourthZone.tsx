import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 3

interface FourthZoneProps extends ZoneProps {}

const FourthZone: React.FC<FourthZoneProps> = ({x, y}) => {
  return (
    <Layer x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={47} height={52} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={37} height={46} stroke='red' strokeWidth={1} />
      <Line points={[9, 20, 9, 22, 10, 22, 10, 36]} stroke='black' strokeWidth={1} />
      <Line points={[13, 36, 13, 22, 15, 22, 15, 51.5]} stroke='black' strokeWidth={1} />
      <Line points={[18, 51.5, 18, 35, 21, 35]} stroke='black' strokeWidth={1} />
      <Line points={[31, 51.5, 31, 35, 28, 35, 31, 35, 31, 23, 39, 23, 39, 20]} stroke='black' strokeWidth={1} />
      <Line points={[]} stroke='black' strokeWidth={1} />
      <Text x={13} y={7} text='Зона 4' fontSize={6} />
      <Text x={10} y={13} text='Мультипак' fontSize={5} />
    </Layer>
  )
}

export default FourthZone
