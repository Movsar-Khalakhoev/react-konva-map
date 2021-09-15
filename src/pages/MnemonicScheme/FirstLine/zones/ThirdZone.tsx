import React from 'react'
import {Group, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 3
const STROKE_WIDTH = .7

interface ThirdZoneProps extends ZoneProps {}

const ThirdZone: React.FC<ThirdZoneProps> = ({x, y}) => {
  return (
    <Group x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={47} height={52} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={4} y={3} width={37} height={46} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[5, 18, 5, 15, 7, 15]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[19, 4, 19, 15, 19, 11, 39, 11, 39, 19]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[39, 12, 43, 17]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[5, 34, 5, 40, 7, 40]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[19, 40, 21, 42, 39, 42, 39, 34]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={13} y={20} text='Зона 3' fontSize={6} />
      <Text x={10} y={26} text='Штабелер' fontSize={5} />
    </Group>
  )
}

export default ThirdZone
