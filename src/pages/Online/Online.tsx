import React from 'react'
import PageLayout from "../../components/PageLayout/PageLayout"
import styles from './Online.module.sass'

const Online = () => {
  return (
    <PageLayout>
      <div className={styles.cameras}>
        {Array(5).fill('').map((camera, index) => (
          <div className={`${styles.camera} ${index === 2 ? styles.cameraActive : ''}`} />
        ))}
      </div>
    </PageLayout>
  )
}

export default Online
