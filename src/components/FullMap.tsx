import React from 'react'
import {Image, Layer, Rect, Stage} from "react-konva"
import {ZonesContext} from "../ZonesContext"
import {useImage} from "../hooks/useImage"
import zonesPlanImage from "../zones-plan.jpeg"
import {KonvaEventObject} from "konva/lib/Node"
import {FULL_MAP_HEIGHT, FULL_MAP_WIDTH} from "./MiniMap"

const scaleBy = 1.03;

const FullMap = () => {
  const {image} = useImage(zonesPlanImage)
  const {
    fullMapRef,
    setFullMapXPosition,
    setFullMapYPosition,
    scale,
    setScale
  } = React.useContext(ZonesContext)

  function zoomStage(event: KonvaEventObject<WheelEvent>) {
    const stage = fullMapRef.current
    if (stage !== null) {
      const newScale = event.evt.deltaY > 0 ? scale * scaleBy : scale / scaleBy;
      setScale(newScale)
    }
  }

  function handleDragMove() {
    if (fullMapRef.current !== null) {
      const { x, y } = fullMapRef.current.getPosition();
      setFullMapXPosition(-x);
      setFullMapYPosition(-y);
    }
  }

  return (
    <div>
      <Stage
        width={FULL_MAP_WIDTH}
        height={FULL_MAP_HEIGHT}
        scaleX={scale}
        scaleY={scale}
        onDragMove={handleDragMove}
        draggable={true}
        onWheel={zoomStage}
        ref={fullMapRef}
      >
        <Layer id='stuffToShow'>
          <Image image={image} />
        </Layer>
      </Stage>
    </div>
  )
}

export default FullMap
