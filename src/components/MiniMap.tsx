import React from 'react'
import {ZonesContext} from "../ZonesContext"
import {Stage} from "react-konva/lib/ReactKonvaCore"
import {Layer, Rect} from "react-konva"

const WIDTH = 271;
const HEIGHT = 163;
const MAP_WIDTH = 3850;

const MiniMap = () => {
  const viewBoxRef = React.useRef<any>(null)
  const {
    miniMapRef,
    setMiniMapXPosition,
    setMiniMapYPosition,
    fullMapXPosition,
    fullMapYPosition,
    scale
  } = React.useContext(ZonesContext)

  const viewXPosition = fullMapXPosition / scale
  const viewYPosition = fullMapYPosition / scale
  const viewScale = (WIDTH / MAP_WIDTH) - 0.005
  const viewDimensions = {
    width: window.innerWidth / scale,
    height: window.innerHeight / scale
  }
  // const devices: any[] = []

  function handleDragMove() {
    if (viewBoxRef.current !== null) {
      const { x, y } = viewBoxRef.current.getPosition();
      setMiniMapXPosition(x * -1);
      setMiniMapYPosition(y * -1);
    }
  }

  return (
    <Stage
      width={WIDTH}
      height={HEIGHT}
      ref={miniMapRef}
      scaleX={viewScale}
      scaleY={viewScale}
    >
      {/*<Layer id='screens'>*/}
      {/*  <Group>*/}
      {/*    {devices}*/}
      {/*  </Group>*/}
      {/*</Layer>*/}
      <Layer id='viewbox'>
        <Rect
          x={viewXPosition}
          y={viewYPosition}
          onDragMove={handleDragMove}
          draggable
          width={viewDimensions.width}
          height={viewDimensions.height}
          fill='red'
          stroke='#2d9cdb'
          strokeWidth={20}
          ref={viewBoxRef}
        />
      </Layer>
    </Stage>
  )
}

export default MiniMap
