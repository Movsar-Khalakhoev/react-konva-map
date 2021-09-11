import React from 'react'
import {Image, Layer, Stage} from "react-konva"
import {ZonesContext} from "../ZonesContext"
import {useImage} from "../hooks/useImage"
import zonesPlanImage from "../zones-plan.jpeg"
import {KonvaEventObject} from "konva/lib/Node"

interface Position {
  x: number
  y: number
}

const scaleBy = 1.05;

function getDistance(p1: Position, p2: Position) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCenter(p1: Position, p2: Position) {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  };
}

function isTouchEnabled() {
  return ( 'ontouchstart' in window ) ||
    ( navigator.maxTouchPoints > 0 )
}

const FullMap = () => {
  const {image} = useImage(zonesPlanImage)
  const {
    fullMapRef,
    setFullMapXPosition,
    setFullMapYPosition,
    setScale
  } = React.useContext(ZonesContext)

  let lastCenter: Position | null = null;
  let lastDist = 0;

  function zoomStage(event: KonvaEventObject<WheelEvent>) {
    event.evt.preventDefault();
    if (fullMapRef.current !== null) {
      const stage = fullMapRef.current;
      const oldScale = stage.scaleX();
      const { x: pointerX, y: pointerY } = stage.getPointerPosition();
      const mousePointTo = {
        x: (pointerX - stage.x()) / oldScale,
        y: (pointerY - stage.y()) / oldScale,
      };
      const newScale = event.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
      stage.scale({ x: newScale, y: newScale });
      setScale(newScale)
      const newPos = {
        x: pointerX - mousePointTo.x * newScale,
        y: pointerY - mousePointTo.y * newScale,
      }
      stage.position(newPos);
      stage.batchDraw();
    }
  }

  function handleTouch(event: KonvaEventObject<TouchEvent>) {
    event.evt.preventDefault();
    const touch1 = event.evt.touches[0];
    const touch2 = event.evt.touches[1];
    const stage = fullMapRef.current;
    if (stage !== null) {
      if (touch1 && touch2) {
        if (stage.isDragging()) {
          stage.stopDrag();
        }

        const p1 = {
          x: touch1.clientX,
          y: touch1.clientY
        };
        const p2 = {
          x: touch2.clientX,
          y: touch2.clientY
        };

        if (!lastCenter) {
          lastCenter = getCenter(p1, p2);
          return;
        }
        const newCenter = getCenter(p1, p2);

        const dist = getDistance(p1, p2);

        if (!lastDist) {
          lastDist = dist;
        }

        const pointTo = {
          x: (newCenter.x - stage.x()) / stage.scaleX(),
          y: (newCenter.y - stage.y()) / stage.scaleX()
        };

        const scale = stage.scaleX() * (dist / lastDist);

        stage.scaleX(scale);
        stage.scaleY(scale);

        const dx = newCenter.x - lastCenter.x;
        const dy = newCenter.y - lastCenter.y;

        const newPos = {
          x: newCenter.x - pointTo.x * scale + dx,
          y: newCenter.y - pointTo.y * scale + dy
        };

        stage.position(newPos);
        stage.batchDraw();

        lastDist = dist;
        lastCenter = newCenter;
      }
    }
  }

  function handleTouchEnd() {
    lastCenter = null;
    lastDist = 0;
  }

  function handleDragMove() {
    if (fullMapRef.current !== null) {
      const { x, y } = fullMapRef.current.getPosition();
      setFullMapXPosition(x * -1);
      setFullMapYPosition(y * -1);
    }
  }

  return (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onDragMove={handleDragMove}
        draggable={!isTouchEnabled()}
        onWheel={zoomStage}
        onTouchMove={handleTouch}
        onTouchEnd={handleTouchEnd}
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
