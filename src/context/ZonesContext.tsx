import React, {useRef} from "react"
import {Stage} from "konva/lib/Stage"

interface IZonesContext {
  fullMapRef: React.MutableRefObject<Stage | null>
  fullMapXPosition: number
  fullMapYPosition: number
  setFullMapXPosition: React.Dispatch<React.SetStateAction<number>>
  setFullMapYPosition: React.Dispatch<React.SetStateAction<number>>
  miniMapRef: React.MutableRefObject<Stage | null>
  miniMapXPosition: number
  miniMapYPosition: number
  setMiniMapXPosition: React.Dispatch<React.SetStateAction<number>>
  setMiniMapYPosition: React.Dispatch<React.SetStateAction<number>>
  scale: number,
  setScale: React.Dispatch<React.SetStateAction<number>>
  scaleDelta: number
  setScaleDelta: React.Dispatch<React.SetStateAction<number>>
}

export const ZonesContext = React.createContext<IZonesContext>({
  fullMapRef: {current: null},
  fullMapXPosition: 0,
  fullMapYPosition: 0,
  setFullMapXPosition: () => {},
  setFullMapYPosition: () => {},
  miniMapRef: {current: null},
  miniMapXPosition: 0,
  miniMapYPosition: 0,
  setMiniMapXPosition: () => {},
  setMiniMapYPosition: () => {},
  scale: 1,
  setScale: () => {},
  scaleDelta: 0,
  setScaleDelta: () => {}
})

const ZonesProvider: React.FC = ({children}) => {
  const fullMapRef = useRef<Stage>(null)
  const miniMapRef = useRef<Stage>(null)
  const [fullMapXPosition, setFullMapXPosition] = React.useState(0)
  const [fullMapYPosition, setFullMapYPosition] = React.useState(0)
  const [miniMapXPosition, setMiniMapXPosition] = React.useState(0)
  const [miniMapYPosition, setMiniMapYPosition] = React.useState(0)
  const [scale, setScale] = React.useState(1)
  const [scaleDelta, setScaleDelta] = React.useState(0)

  return (
    <ZonesContext.Provider value={{
      fullMapRef,
      fullMapXPosition,
      fullMapYPosition,
      setFullMapXPosition,
      setFullMapYPosition,
      miniMapRef,
      miniMapXPosition,
      miniMapYPosition,
      setMiniMapXPosition,
      setMiniMapYPosition,
      scale,
      setScale,
      scaleDelta,
      setScaleDelta
    }}>
      {children}
    </ZonesContext.Provider>
  )
}

export default ZonesProvider
