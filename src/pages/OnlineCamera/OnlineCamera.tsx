import React from 'react'
import {Link, useHistory} from "react-router-dom"
import styles from './OnlineCamera.module.sass'
import PageLayout from "../../components/PageLayout/PageLayout"

const OnlineCamera = () => {
  const history = useHistory()
  return (
    <PageLayout>
      <div className={styles.broadcast} />
      <div className={styles.actions}>
        <button className={styles.actionsArchive}>В архив</button>
        <button className={styles.actionsGoBack} onClick={history.goBack}>Обратно</button>
      </div>
    </PageLayout>
  )
}

export default OnlineCamera
