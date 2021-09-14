import React from 'react'
import {Layer, Line, Rect, Text} from "react-konva"
import {ZoneProps} from "../../MnemonicScheme"

interface FourthZoneProps extends ZoneProps {}

const FourthZone: React.FC<FourthZoneProps> = ({x, y}) => {
  return (
    <Layer x={x} y={y}>
      <Rect width={24.5} height={24} stroke='red' strokeWidth={1} />
      <Rect x={2.3} y={3} width={20} height={18} stroke='red' strokeWidth={1} />
      <Line points={[4, 4.5, 20, 4.5]} stroke='black' strokeWidth={1} />
      <Line points={[19, 11, 19, 24, 4, 24]} stroke='black' strokeWidth={1} />
      <Line points={[]} stroke='black' strokeWidth={1} />
      <Text x={4} y={5} text='Зона 4' fontSize={5} />
      <Text x={3} y={11} text='Магазин' fontSize={4} />
      <Text x={3} y={14} text='поддонов' fontSize={4} />
    </Layer>
  )
}

export default FourthZone
