import React from 'react'
import {Group, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 2.67
const STROKE_WIDTH = .7

interface FirstZoneProps extends ZoneProps {}

const FirstZone: React.FC<FirstZoneProps> = ({x, y}) => {
  return (
    <Group x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={31} height={55} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={2.3} y={3.7} width={26.6} height={46} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[19, 7.8, 26.7, 7.8, 26.7, 22]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[26.7, 26, 26.7, 31]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[19, 33, 19, 29.5, 10.5, 29.5, 10.5, 33, 19, 33, 27, 33, 27, 41.5, 19.5, 41.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[26.7, 43, 26.7, 45.5, 19.5, 45.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[3.5, 7.8, 3.5, 28, 7.5, 34.8]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={6} y={10} text='Зона 1' fontSize={6} />
      <Text x={4} y={15} text='Упаковочная' fontSize={4} />
      <Text x={7} y={19} text='машина 1' fontSize={4} />
    </Group>
  )
}

export default FirstZone
