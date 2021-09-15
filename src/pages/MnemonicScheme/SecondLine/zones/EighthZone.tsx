import React from 'react'
import {Group, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 2.87
const STROKE_WIDTH = .7

interface EighthZoneProps extends ZoneProps {}

const EighthZone: React.FC<EighthZoneProps> = ({x, y}) => {
  return (
    <Group x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={56} height={55} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={4} y={3} width={48} height={49} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[19.5, 54, 5, 39, 5, 8, 43, 8, 50, 13, 50, 37, 48, 37, 48, 46]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[48, 52.5, 48, 54.5]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={17} y={20} text='Зона 8' fontSize={6}/>
      <Text x={18} y={26} text='Робот 1' fontSize={5} />
    </Group>
  )
}

export default EighthZone
