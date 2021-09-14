import React from 'react'
import {Layer, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 3

interface FifthZoneProps extends ZoneProps {}

const FifthZone: React.FC<FifthZoneProps> = ({x, y}) => {
  return (
    <Layer x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={47} height={52} stroke='red' strokeWidth={1} />
      <Rect x={4} y={3} width={37} height={46} stroke='red' strokeWidth={1} />
      <Text x={13} y={20} text='Зона 5' fontSize={6} />
      <Text x={8} y={26} text='Стрейч-Хууд' fontSize={5} />
    </Layer>
  )
}

export default FifthZone
