import React from 'react'
import {Group, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 3
const STROKE_WIDTH = .7

interface FifthZoneProps extends ZoneProps {}

const FifthZone: React.FC<FifthZoneProps> = ({x, y}) => {
  return (
    <Group x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={47} height={52} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={4} y={3} width={37} height={46} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Text x={13} y={20} text='Зона 5' fontSize={6} />
      <Text x={8} y={26} text='Стрейч-Хууд' fontSize={5} />
    </Group>
  )
}

export default FifthZone
