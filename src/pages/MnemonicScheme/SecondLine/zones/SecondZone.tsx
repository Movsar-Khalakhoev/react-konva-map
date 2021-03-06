import React from 'react'
import {Group, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 2.67
const STROKE_WIDTH = .7

interface SecondZoneProps extends ZoneProps {}

const SecondZone: React.FC<SecondZoneProps> = ({x, y}) => {
  return (
    <Group x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={31} height={55} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={2.3} y={3.7} width={26.6} height={46} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[14.5, 15, 7.5, 15, 7.5, 30.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[7.5, 33.5, 7.5, 38.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[14.8, 40, 14.8, 36, 23.5, 36, 23.5, 40, 6.5, 40, 6.5, 48.5, 6.5, 40, 4, 40, 4, 48.5, 14.8, 48.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[7.5, 50.5, 7.5, 52.5, 14.8, 52.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[31, 15, 31, 35, 26.5, 42]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={6} y={7} text='Зона 2' fontSize={6} />
      <Text x={4} y={20} text='Упаковочная' fontSize={4} />
      <Text x={8} y={24} text='машина 2' fontSize={4} />
    </Group>
  )
}

export default SecondZone
