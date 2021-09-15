import React from 'react'
import {Image, Layer, Stage} from "react-konva"
import {ZonesContext} from "../context/ZonesContext"
import {useImage} from "../hooks/useImage"
import zonesPlanImage from "../assets/zones-plan1.jpg"
import {KonvaEventObject} from "konva/lib/Node"
import FirstLine from "../pages/MnemonicScheme/FirstLine/FirstLine"
import SecondLine from "../pages/MnemonicScheme/SecondLine/SecondLine"

const scaleBy = 1.05;
export const FULL_MAP_WIDTH = window.innerWidth;
export const FULL_MAP_HEIGHT = window.innerHeight;

const FullMap = () => {
  const {image} = useImage(process.env.NODE_ENV === 'production' ? `/react-konva-map/build${zonesPlanImage.slice(1)}` : zonesPlanImage)
  const {
    fullMapRef,
    setFullMapXPosition,
    setFullMapYPosition,
    scale,
    setScale
  } = React.useContext(ZonesContext)

  function zoomStage(event: KonvaEventObject<WheelEvent>) {
    const stage = fullMapRef.current
    const oldScale = stage!.scaleX();
    if (stage !== null) {
      const newScale = event.evt.deltaY > 0 ? scale * scaleBy : scale / scaleBy;
      setScale(newScale)

      const pointerPosition = stage.getPointerPosition();
      const mousePointTo = {
        x: (pointerPosition!.x - stage.x()) / oldScale,
        y: (pointerPosition!.y - stage.y()) / oldScale,
      };
      stage.scale({ x: newScale, y: newScale });
      const newPos = {
        x: pointerPosition!.x - mousePointTo.x * newScale,
        y: pointerPosition!.y - mousePointTo.y * newScale,
      }

      stage.position(newPos);
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
        scaleX={scale * .3}
        scaleY={scale * .3}
        onDragMove={handleDragMove}
        draggable={true}
        onWheel={zoomStage}
        ref={fullMapRef}
      >
        <Layer  dragDistance={2}>
          <Image x={0} y={0} image={image} opacity={.2} />
        </Layer>
        <FirstLine />
        <SecondLine />
      </Stage>
    </div>
  )
}

export default FullMap
