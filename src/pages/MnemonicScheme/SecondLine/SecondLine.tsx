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

const OFFSET_X = 1200
const OFFSET_Y = 500

const SecondLine = () => {
  return (
    <>
      <FirstZone x={789 + OFFSET_X} y={1743 + OFFSET_Y} />
      <SecondZone x={687 + OFFSET_X} y={1743 + OFFSET_Y} />
      <ThirdZone x={593 + OFFSET_X} y={1743 + OFFSET_Y} />
      <FourthZone x={578 + OFFSET_X} y={1429 + OFFSET_Y} />
      <FifthZone x={266 + OFFSET_X} y={1220 + OFFSET_Y} />
      <SixthZone x={980 + OFFSET_X} y={1863 + OFFSET_Y} />
      <SeventhZone x={999 + OFFSET_X} y={319 + OFFSET_Y} />
      <EighthZone x={390 + OFFSET_X} y={1409 + OFFSET_Y} />
      <NinthZone x={390 + OFFSET_X} y={1574 + OFFSET_Y} />
    </>
  )
}

export default SecondLine
