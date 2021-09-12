import React from 'react'
import FullMap from "../components/FullMap"
import MiniMap from "../components/MiniMap"
import ZonesProvider from "../context/ZonesContext"
import PageLayout from "../components/PageLayout/PageLayout"

const MnemonicScheme = () => {
  return (
    <PageLayout>
      <ZonesProvider>
        <div style={{position: 'relative', height: '100%', width: '100vw', overflow: 'hidden'}}>
          <FullMap />
          <div style={{position: "absolute", top: 10, left: 10, backgroundColor: '#c1c1c1'}}>
            <MiniMap />
          </div>
        </div>
      </ZonesProvider>
    </PageLayout>
  )
}

export default MnemonicScheme
