import React from 'react'
import {Group, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 3.85
const STROKE_WIDTH = .7

interface SecondZoneProps extends ZoneProps {}

const SecondZone: React.FC<SecondZoneProps> = ({x, y}) => {
  return (
    <Group x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={78} height={30} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={4.5} y={2} width={68} height={26} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[7, 9, 7, 5, 18, 5, 18, 9, 18, 3, 75, 3, 75, 9]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[75, 14, 75, 21, 39, 21]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[34, 21, 29, 21]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[28, 15, 31, 15, 31, 8, 28, 8, 28, 22, 22, 22, 22, 15]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[7, 14, 7, 18, 18, 18, 18, 14, 18, 20, 21, 20]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={40} y={7} text='Зона 2' fontSize={6} />
      <Text x={23} y={13} text='Упаковочная машина 2' fontSize={4.5} />
    </Group>
  )
}

export default SecondZone
