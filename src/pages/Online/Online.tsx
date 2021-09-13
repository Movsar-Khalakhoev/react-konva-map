import React from 'react'
import {Link, useHistory} from "react-router-dom"
import PageLayout from "../../components/PageLayout/PageLayout"
import styles from './Online.module.sass'

const Online = () => {
  const history = useHistory()
  const [isActiveCamera, setIsActiveCamera] = React.useState(false)
  const [cameras] = React.useState([
    'Зона 1 Упаковочная машина 3',
    'Зона 2 Упаковочная машина 2',
    'Зона 3 Упаковочная машина 1',
    'Зона 4 Магазин поддонов',
    'Зона 5 Стрейч-Хууд',
    'Зона 6 Штабелер'
  ])
  const activeCamera = React.useRef({cameraTitle: '', lastUpdate: new Date()})

  React.useEffect(() => {
    const activeCameraFromLS = JSON.parse(localStorage.getItem('activeCamera') || 'null')
    if (activeCameraFromLS.current) {
      activeCamera.current = activeCameraFromLS
    }

    const activeCameraListener = setInterval(() => {
      const activeCameraFromLS = JSON.parse(localStorage.getItem('activeCamera') || 'null')
      if (activeCameraFromLS && new Date(activeCameraFromLS.lastUpdate) > new Date(activeCamera.current.lastUpdate)) {
        activeCamera.current = activeCameraFromLS
        history.push('/online/camera')
      }
    }, 100)

    return () => clearInterval(activeCameraListener)
  }, [])

  return (
    <PageLayout>
      <button
        style={{position: 'absolute', top: 15, left: 70}}
        onClick={() => setIsActiveCamera(prevState => !prevState)}>
        Активировать</button>
      <div className={styles.cameras}>
        {cameras.map((camera, index) => (
          <Link key={camera} to='/online/camera' className={`${styles.camera} ${index === 2 && isActiveCamera ? styles.cameraActive : ''}`} />
        ))}
      </div>
    </PageLayout>
  )
}

export default Online
