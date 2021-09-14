import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

const ZONE_SCALE = 2.2
const STROKE_WIDTH = .7

interface SeventhZoneProps extends ZoneProps {}

const SeventhZone: React.FC<SeventhZoneProps> = ({x, y}) => {
  return (
    <Layer x={x} y={y} scaleX={ZONE_SCALE} scaleY={ZONE_SCALE}>
      <Rect width={54} height={35} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Rect x={2.5} y={3.7} width={47.5} height={27} stroke='red' strokeWidth={STROKE_WIDTH} />
      <Line points={[10, 0.5, 10, 24, 53.5, 24]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[10, 6, 0.5, 6]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[10, 8, 0.5, 8]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[35, 0.5, 35, 24]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Line points={[37, 0.5, 37, 24]} stroke='black' strokeWidth={STROKE_WIDTH} />
      <Text x={13} y={7} text='Зона 7' fontSize={6}/>
      <Text x={12} y={14} text='Гофрировщик-' fontSize={5} />
      <Text x={11} y={18} text='подпрессовщик' fontSize={5} />
    </Layer>
  )
}

export default SeventhZone
