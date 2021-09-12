import React from 'react'
import styles from './AdminPanel.module.sass'
import PageLayout from "../../components/PageLayout/PageLayout"
import Modal from "../../components/Modal/Modal"
import {Layer, Line, Stage} from "react-konva"
import {KonvaEventObject} from "konva/lib/Node"

const AdminPanel = () => {
  const [zones] = React.useState([
    'Зона 1 Упаковочная машина 3',
    'Зона 2 Упаковочная машина 2',
    'Зона 3 Упаковочная машина 1',
    'Зона 4 Магазин поддонов',
    'Зона 5 Стрейч-Хууд',
    'Зона 6 Штабелер'
  ])
  const [activeZone, setActiveZone] = React.useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [lines, setLines] = React.useState<number[][]>([]);
  const isDrawing = React.useRef(false);
  const activeCamera = React.useRef({cameraTitle: '', lastUpdate: new Date()})

  const activateZone = (zone: string) => {
    setActiveZone(zone)
    setIsModalOpen(true)
  }

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

  const closeModalHandler = () => {
    setIsModalOpen(false)
    setLines([])
    setActiveZone(null)
  }

  React.useEffect(() => {
    const activeCameraFromLS = JSON.parse(localStorage.getItem('activeCamera') || 'null')
    if (activeCameraFromLS.current) {
      activeCamera.current = activeCameraFromLS
    }

    const activeCameraListener = setInterval(() => {
      const activeCameraFromLS = JSON.parse(localStorage.getItem('activeCamera') || 'null')
      if (activeCameraFromLS && new Date(activeCameraFromLS.lastUpdate) > new Date(activeCamera.current.lastUpdate)) {
        activeCamera.current = activeCameraFromLS
        setActiveZone(activeCameraFromLS.cameraTitle)
        setIsModalOpen(true)
      }
    }, 100)

    return () => clearInterval(activeCameraListener)
  }, [])

  return (
    <PageLayout>
      <div className={styles.zones}>
        {
          zones.map(zone => (
            <div className={styles.zone} key={zone}>
              <p className={styles.zoneTitle} onClick={() => activateZone(zone)}>{zone}</p>
            </div>
          ))
        }
      </div>
      <Modal isOpen={isModalOpen} closeHandler={closeModalHandler}>
        <p className={styles.modalTitle}>{activeZone}</p>
        <div className={styles.modalContainer}>
          <div className={styles.joystickContainer}>
            <button className={styles.joystickButton}>Влево</button>
            <button className={styles.joystickButton}>Вправо</button>
          </div>
          <div className={styles.broadcastContainer}>
            <div className={styles.broadcast}>
              <button className={styles.prevStateButton} onClick={
                () => setLines(prevState => prevState.slice(0, prevState.length - 1))}>&#x2190;</button>
              <Stage
                width={500}
                height={500}
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
          <div className={styles.actionsContainer}>
            <button className={styles.actionsCreate}>Создать</button>
            <button className={styles.actionsApply}>Применить</button>
            <button className={styles.actionsCancel}>Отмена</button>
          </div>
        </div>
      </Modal>
    </PageLayout>
  )
}

export default AdminPanel
