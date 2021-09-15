import React from 'react'
import FullMap from "../../components/FullMap"
import ZonesProvider from "../../context/ZonesContext"
import PageLayout from "../../components/PageLayout/PageLayout"
import styles from './MnemonicScheme.module.sass'

export interface ZoneProps {
  x: number
  y: number
}

const MnemonicScheme = () => {

  const setActiveCamera = (cameraTitle: string) => {
    localStorage.setItem('activeCamera', JSON.stringify({cameraTitle, lastUpdate: new Date()}))
  }

  return (
    <PageLayout>
      <ZonesProvider>
        <div className={styles.maps}>
          <FullMap />
          {/*<div className={styles.minimapWrapper}>*/}
          {/*  <MiniMap />*/}
          {/*</div>*/}
          <div className={styles.zones}>
            <div className={styles.firstZone}>
              <p className={styles.lineTitle}>Линия 1</p>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 1')}>Зона 1</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 2')}>Зона 2</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 3')}>Зона 3</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 4</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 5</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 6</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 7</button>
            </div>
            <div className={styles.secondZone}>
              <p className={styles.lineTitle}>Линия 2</p>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 1')}>Зона 1</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 2')}>Зона 2</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 3')}>Зона 3</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 4</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 5</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 6</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 7</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 8</button>
              <button className={styles.zone} onClick={() => setActiveCamera('Камера 4')}>Зона 9</button>
            </div>
          </div>
        </div>
      </ZonesProvider>
    </PageLayout>
  )
}

export default MnemonicScheme
