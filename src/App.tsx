import React from "react"
import FullMap from "./components/FullMap"
import ZonesProvider from "./ZonesContext"
import MiniMap from "./components/MiniMap"

function App() {
  return (
    <ZonesProvider>
      <FullMap />
      <div style={{position: "absolute", top: 10, left: 10, backgroundColor: '#c1c1c1'}}>
        <MiniMap />
      </div>
    </ZonesProvider>
  )
}

export default App
