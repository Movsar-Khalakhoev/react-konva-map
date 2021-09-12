import React from 'react'
import {NavLink} from "react-router-dom"
import styles from './PageLayout.module.sass'

const PageLayout: React.FC = ({children}) => {
  return (
    <div className={styles.page}>
      <div className={styles.navbar}>
        <div className={styles.buttonsGroup}>
          <NavLink to='/mnemonic-scheme' className={styles.button} activeClassName={styles.buttonActive}>Мнемосхема</NavLink>
          <NavLink to='/admin-panel' className={styles.button} activeClassName={styles.buttonActive}>Админ. панель</NavLink>
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default PageLayout
