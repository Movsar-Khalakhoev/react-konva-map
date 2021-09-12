import React from 'react'
import FullMap from "../../components/FullMap"
import MiniMap from "../../components/MiniMap"
import ZonesProvider from "../../context/ZonesContext"
import PageLayout from "../../components/PageLayout/PageLayout"
import styles from './MnemonicScheme.module.sass'

const MnemonicScheme = () => {

  const setActiveCamera = (cameraTitle: string) => {
    localStorage.setItem('activeCamera', JSON.stringify({cameraTitle, lastUpdate: new Date()}))
  }

  return (
    <PageLayout>
      <ZonesProvider>
        <div className={styles.maps}>
          <FullMap />
          <div className={styles.minimapWrapper}>
            <MiniMap />
          </div>
          <div className={styles.cameras}>
            <button className={styles.camera} onClick={() => setActiveCamera('Камера 1')}>Камера 1</button>
            <button className={styles.camera} onClick={() => setActiveCamera('Камера 2')}>Камера 2</button>
            <button className={styles.camera} onClick={() => setActiveCamera('Камера 3')}>Камера 3</button>
            <button className={styles.camera} onClick={() => setActiveCamera('Камера 4')}>Камера 4</button>
          </div>
        </div>
      </ZonesProvider>
    </PageLayout>
  )
}

export default MnemonicScheme
