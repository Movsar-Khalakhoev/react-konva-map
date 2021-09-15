import React from 'react'
import {Group, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 3
const STROKE_WIDTH = .7

interface SixthZoneProps extends ZoneProps {}

const SixthZone: React.FC<SixthZoneProps> = ({x, y}) => {
  return (
    <Group x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={39.5} height={62} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={3} y={2} width={34} height={57} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[13, .5, 13, 14]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[14, 28, 12, 31, 9, 31, 9, 37, 6, 32, 9, 37, 9, 41, 13, 41, 13, 58.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[29, .5, 29, 30, 32, 30, 32, 37, 35, 33, 32, 37, 32, 41, 29, 41, 29, 58.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={10} y={15} text='Зона 6' fontSize={6} />
      <Text x={7} y={22} text='Палетайзер' fontSize={5} />
    </Group>
  )
}

export default SixthZone
