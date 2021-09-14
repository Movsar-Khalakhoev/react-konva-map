import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 2.83

interface SixthZoneProps extends ZoneProps {}

const SixthZone: React.FC<SixthZoneProps> = ({x, y}) => {
  return (
    <Layer x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={49.5} height={55} stroke='red' strokeWidth={1} />
      <Rect x={3.5} y={6.5} width={40} height={41} stroke='red' strokeWidth={1} />
      <Line points={[31, 7.6, 45.5, 7.6, 45.5, 46, 30.5, 46, 30.5, 43, 18.5, 43, 18.5, 46, 3.5, 46, 3.5, 7.6, 19, 7.6]} stroke='black' strokeWidth={1} />
      <Line points={[24.5, 43, 24.5, 47]} stroke='black' strokeWidth={1} />
      <Text x={14} y={20} text='Зона 6' fontSize={6} />
      <Text x={12} y={26} text='Штабелер' fontSize={5} />
    </Layer>
  )
}

export default SixthZone
