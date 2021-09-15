import React from 'react'
import styles from "../MnemonicScheme.module.sass"
import {ZonesContext} from "../../../context/ZonesContext"
import {scaleBy} from "../../../components/FullMap"

const Zoom = () => {
  const {setScale} = React.useContext(ZonesContext)

  return (
    <div className={styles.zoom}>
      <button className={styles.zoomIn} onClick={() => setScale(prevState => prevState * 1.1)}>&#x2b;</button>
      <button className={styles.zoomOut} onClick={() => setScale(prevState => prevState * .9)}>&#x2212;</button>
    </div>
  )
}

export default Zoom
