import React from 'react'
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
    <>
      <FirstZone x={393 + OFFSET_X} y={1765 + OFFSET_Y} />
      <SecondZone x={393 + OFFSET_X} y={1895 + OFFSET_Y} />
      <ThirdZone x={170 + OFFSET_X} y={1568 + OFFSET_Y} />
      <FourthZone x={332 + OFFSET_X} y={1415 + OFFSET_Y} />
      <FifthZone x={397 + OFFSET_X} y={1180 + OFFSET_Y} />
      <SixthZone x={534 + OFFSET_X} y={1440 + OFFSET_Y} />
      <SeventhZone x={150 + OFFSET_X} y={40 + OFFSET_Y} />
    </>
  )
}

export default FirstLine
