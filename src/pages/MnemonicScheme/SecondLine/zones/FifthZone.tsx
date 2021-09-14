import React from 'react'
import {Layer, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 2.58
const STROKE_WIDTH = .7

interface FifthZoneProps extends ZoneProps {}

const FifthZone: React.FC<FifthZoneProps> = ({x, y}) => {
  return (
    <Layer x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={55} height={61} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={6} y={3} width={44} height={55} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Text x={17} y={20} text='Зона 5' fontSize={6} />
      <Text x={12} y={26} text='Стрейч-Хууд' fontSize={5} />
    </Layer>
  )
}

export default FifthZone
