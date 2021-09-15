import React from 'react'
import {Layer} from "react-konva"
import FirstZone from "./zones/FirstZone"
import SecondZone from "./zones/SecondZone"
import ThirdZone from "./zones/ThirdZone"
import FourthZone from "./zones/FourthZone"
import FifthZone from "./zones/FifthZone"
import SixthZone from "./zones/SixthZone"
import SeventhZone from "./zones/SeventhZone"

const OFFSET_X = 300
const OFFSET_Y = 2200

const FirstLine = () => {
  return (
    <Layer x={OFFSET_X} y={OFFSET_Y}>
      <FirstZone x={393} y={1765} />
      <SecondZone x={393} y={1895} />
      <ThirdZone x={170} y={1568} />
      <FourthZone x={332} y={1415} />
      <FifthZone x={397} y={1180} />
      <SixthZone x={534} y={1440} />
      <SeventhZone x={150} y={40} />
    </Layer>
  )
}

export default FirstLine
