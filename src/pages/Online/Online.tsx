import React from 'react'
import {Link} from "react-router-dom"
import PageLayout from "../../components/PageLayout/PageLayout"
import styles from './Online.module.sass'

const Online = () => {
  const [isActiveCamera, setIsActiveCamera] = React.useState(false)

  return (
    <PageLayout>
      <button
        style={{position: 'absolute', top: 15, left: 70}}
        onClick={() => setIsActiveCamera(prevState => !prevState)}>
        Активировать</button>
      <div className={styles.cameras}>
        {Array(5).fill('').map((camera, index) => (
          <Link key={index} to='/online/camera' className={`${styles.camera} ${index === 2 && isActiveCamera ? styles.cameraActive : ''}`} />
        ))}
      </div>
    </PageLayout>
  )
}

export default Online
