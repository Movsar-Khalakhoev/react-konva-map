import React from 'react'
import FirstZone from "./zones/FirstZone"
import SecondZone from "./zones/SecondZone"
import ThirdZone from "./zones/ThirdZone"
import FourthZone from "./zones/FourthZone"
import FifthZone from "./zones/FifthZone"
import SixthZone from "./zones/SixthZone"
import SeventhZone from "./zones/SeventhZone"
import EighthZone from "./zones/EighthZone"
import NinthZone from "./zones/NinthZone"
import {Layer} from "react-konva"

const OFFSET_X = 1200
const OFFSET_Y = 500

const SecondLine = () => {
  return (
    <Layer x={OFFSET_X} y={OFFSET_Y}>
      <FirstZone x={789} y={1743} />
      <SecondZone x={687} y={1743} />
      <ThirdZone x={593} y={1743} />
      <FourthZone x={578} y={1429} />
      <FifthZone x={266} y={1220} />
      <SixthZone x={980} y={1863} />
      <SeventhZone x={999} y={319} />
      <EighthZone x={390} y={1409} />
      <NinthZone x={390} y={1574} />
    </Layer>
  )
}

export default SecondLine
