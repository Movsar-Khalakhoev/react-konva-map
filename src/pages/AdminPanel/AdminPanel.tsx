import React from 'react'
import styles from './AdminPanel.module.sass'
import PageLayout from "../../components/PageLayout/PageLayout"
import {Layer, Line, Stage} from "react-konva"
import {KonvaEventObject} from "konva/lib/Node"

const AdminPanel = () => {
  const [lines, setLines] = React.useState<number[][]>([]);
  const isDrawing = React.useRef(false);
  const broadcastRef = React.useRef<HTMLDivElement | null>(null)
  const [broadcastSize, setBroadcastSize] = React.useState({width: 0, height: 0})


  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;
    const pos = e.target.getStage()?.getPointerPosition();
    setLines(prevState => {
      return [...prevState, [pos!.x, pos!.y]]
    });
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage()!;
    const point = stage.getPointerPosition()!;
    setLines(prevState => {
      return [...prevState.slice(0, prevState.length - 1), [...prevState[prevState.length - 1], point.x, point.y]]
    })
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    setLines(prevState => {
      const lastLine = prevState[prevState.length - 1]
      return [...prevState.slice(0, prevState.length - 1),
          [...lastLine, lastLine[0], lastLine[1]]
      ]
    })
  };

  React.useEffect(() => {
    if (broadcastRef.current) {
      setBroadcastSize({
        width: broadcastRef.current.clientWidth,
        height: broadcastRef.current.clientHeight
      })
    }
  }, [broadcastRef.current])

  return (
    <PageLayout>
      <p className={styles.title}>камера 123123423</p>
      <div className={styles.container}>
        <div className={styles.broadcastContainer}>
          <div className={styles.broadcast} ref={broadcastRef}>
            <button className={styles.prevStateButton} onClick={
              () => setLines(prevState => prevState.slice(0, prevState.length - 1))}>&#x2190;</button>
            <Stage
              width={broadcastSize.width}
              height={broadcastSize.height}
              onMouseDown={handleMouseDown}
              onMousemove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <Layer>
                {lines.map((line, i) => (
                  <Line
                    key={i}
                    points={line}
                    stroke="red"
                    strokeWidth={2}
                    tension={0.5}
                    lineCap="round"
                    globalCompositeOperation='source-over'
                    fill='rgba(255, 0, 0, 0.2)'
                    closed={i === lines.length - 1 ? !isDrawing.current : true}
                  />
                ))}
              </Layer>
            </Stage>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.joystickContainer}>
            <div className={styles.joystickButtons}>
              <button className={styles.joystickTopArrow}>&#x2191;</button>
              <button className={styles.joystickBottomArrow}>&#x2193;</button>
              <button className={styles.joystickLeftArrow}>&#x2190;</button>
              <button className={styles.joystickRightArrow}>&#x2192;</button>
              <button className={styles.joystickRotateRight}>&#x27F3;</button>
              <button className={styles.joystickRotateLeft}>&#x27F2;</button>
              <button className={styles.joystickZoomIn}>&#x2b;</button>
              <button className={styles.joystickZoomOut}>&#x2212;</button>
            </div>
          </div>
          <div className={styles.actionsContainer}>
            <button className={styles.actionsCreate}>Создать</button>
            <button className={styles.actionsApply}>Применить</button>
            <button className={styles.actionsCancel}>Отмена</button>
          </div>
        </div>
      </div>
      {/*<div className={styles.zones}>*/}
      {/*  {*/}
      {/*    zones.map(zone => (*/}
      {/*      <div className={styles.zone} key={zone}>*/}
      {/*        <p className={styles.zoneTitle} onClick={() => activateZone(zone)}>{zone}</p>*/}
      {/*      </div>*/}
      {/*    ))*/}
      {/*  }*/}
      {/*</div>*/}
      {/*<Modal isOpen={isModalOpen} closeHandler={closeModalHandler}>*/}
      {/*  <p className={styles.modalTitle}>{activeZone}</p>*/}
      {/*  <div className={styles.modalContainer}>*/}
      {/*    <div className={styles.joystickContainer}>*/}
      {/*      <button className={styles.joystickButton}>Влево</button>*/}
      {/*      <button className={styles.joystickButton}>Вправо</button>*/}
      {/*    </div>*/}
      {/*    <div className={styles.broadcastContainer}>*/}
      {/*      <div className={styles.broadcast}>*/}
      {/*        <button className={styles.prevStateButton} onClick={*/}
      {/*          () => setLines(prevState => prevState.slice(0, prevState.length - 1))}>&#x2190;</button>*/}
      {/*        <Stage*/}
      {/*          width={500}*/}
      {/*          height={500}*/}
      {/*          onMouseDown={handleMouseDown}*/}
      {/*          onMousemove={handleMouseMove}*/}
      {/*          onMouseUp={handleMouseUp}*/}
      {/*        >*/}
      {/*          <Layer>*/}
      {/*            {lines.map((line, i) => (*/}
      {/*              <Line*/}
      {/*                key={i}*/}
      {/*                points={line}*/}
      {/*                stroke="red"*/}
      {/*                strokeWidth={2}*/}
      {/*                tension={0.5}*/}
      {/*                lineCap="round"*/}
      {/*                globalCompositeOperation='source-over'*/}
      {/*                fill='rgba(255, 0, 0, 0.2)'*/}
      {/*                closed={i === lines.length - 1 ? !isDrawing.current : true}*/}
      {/*              />*/}
      {/*            ))}*/}
      {/*          </Layer>*/}
      {/*        </Stage>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={styles.actionsContainer}>*/}
      {/*      <button className={styles.actionsCreate}>Создать</button>*/}
      {/*      <button className={styles.actionsApply}>Применить</button>*/}
      {/*      <button className={styles.actionsCancel}>Отмена</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Modal>*/}
    </PageLayout>
  )
}

export default AdminPanel
