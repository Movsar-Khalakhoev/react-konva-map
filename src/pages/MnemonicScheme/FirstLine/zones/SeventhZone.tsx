import React from 'react'
import {Group, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 3
const STROKE_WIDTH = .7

interface SeventhZoneProps extends ZoneProps {}

const SeventhZone: React.FC<SeventhZoneProps> = ({x, y}) => {
  return (
    <Group x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={39.5} height={26} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={3} y={3} width={34} height={20} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[11, 11, 10, 11, 10, 25.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[11.5, 7, 11.5, 19, 12, 19, 12, 25.5, 12, 19, 27, 19, 27, 25.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[11, 19, 11, 25.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[27.5, 7, 27.5, 11, 39, 11, 27.5, 11, 27.5, 25.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[28, 18.8, 28, 25.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={10} y={4} text='Зона 7' fontSize={6}/>
      <Text x={7} y={11} text='Гофрировщик-' fontSize={4} />
      <Text x={6} y={14} text='подпрессовщик' fontSize={4} />
    </Group>
  )
}

export default SeventhZone
