import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 3.39
const STROKE_WIDTH = .7

interface FourthZoneProps extends ZoneProps {}

const FourthZone: React.FC<FourthZoneProps> = ({x, y}) => {
  return (
    <Layer x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={24.5} height={24} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={2.3} y={3} width={20} height={18} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[4, 4.5, 20, 4.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[19, 11, 19, 24, 4, 24]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={4} y={5} text='Зона 4' fontSize={5} />
      <Text x={3} y={11} text='Магазин' fontSize={4} />
      <Text x={3} y={14} text='поддонов' fontSize={4} />
    </Layer>
  )
}

export default FourthZone
