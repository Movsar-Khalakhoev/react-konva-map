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

const SecondLine = () => {
  return (
    <>
      <FirstZone x={200} y={200} />
      <SecondZone x={240} y={200} />
      <ThirdZone x={280} y={200} />
      <FourthZone x={320} y={200} />
      <FifthZone x={360} y={200} />
      <SixthZone x={430} y={200} />
      <SeventhZone x={500} y={200} />
      <EighthZone x={570} y={200} />
      <NinthZone x={640} y={200} />
    </>
  )
}

export default SecondLine
