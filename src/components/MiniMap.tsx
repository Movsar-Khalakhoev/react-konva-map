import React from 'react'
import {ZonesContext} from "../ZonesContext"
import {Stage} from "react-konva/lib/ReactKonvaCore"
import {Layer, Rect} from "react-konva"
import IRect from "konva/lib/shapes/Rect"

const MINI_MAP_WIDTH = 271;
const MINI_MAP_HEIGHT = 271;
export const FULL_MAP_WIDTH = 2000;
export const FULL_MAP_HEIGHT = 2000;

const MiniMap = () => {
  const viewBoxRef = React.useRef<IRect.Rect>(null)
  const {
    miniMapRef,
    setMiniMapXPosition,
    setMiniMapYPosition,
    fullMapXPosition,
    fullMapYPosition,
    scale
  } = React.useContext(ZonesContext)

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
      width={MINI_MAP_WIDTH}
      height={MINI_MAP_HEIGHT}
      ref={miniMapRef}
      scaleX={MINI_MAP_WIDTH / FULL_MAP_WIDTH}
      scaleY={MINI_MAP_HEIGHT / FULL_MAP_HEIGHT}
    >
      {/*<Layer id='screens'>*/}
      {/*  <Group>*/}
      {/*    {devices}*/}
      {/*  </Group>*/}
      {/*</Layer>*/}
      <Layer id='viewbox'>
        <Rect
          x={fullMapXPosition}
          y={fullMapYPosition}
          onDragMove={handleDragMove}
          draggable
          width={viewDimensions.width}
          height={viewDimensions.height}
          fill='rgba(86, 204, 242, 0.1)'
          stroke='#2d9cdb'
          strokeWidth={2}
          ref={viewBoxRef}
        />
      </Layer>
    </Stage>
  )
}

export default MiniMap
