import React from "react"
import FullMap from "./components/FullMap"
import ZonesProvider from "./ZonesContext"
import MiniMap from "./components/MiniMap"

function App() {
  return (
    <ZonesProvider>
      <div style={{height: '100vh', width: '100vw', overflow: 'hidden'}}>
        <FullMap />
        <div style={{position: "absolute", top: 10, left: 10, backgroundColor: '#c1c1c1'}}>
          <MiniMap />
        </div>
      </div>
    </ZonesProvider>
  )
}

export default App
