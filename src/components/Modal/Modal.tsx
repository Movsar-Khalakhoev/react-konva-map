import React from 'react'
import styles from './Modal.module.sass'

interface ModalProps {
  isOpen: boolean
  closeHandler: () => void
}

const Modal: React.FC<ModalProps> = ({children, isOpen, closeHandler}) => {
  return (
    <>
      {isOpen && <div className={styles.modal}>
        <span className={styles.overlay} />
        <div className={styles.content}>
          <span className={styles.cross} onClick={closeHandler}>&#10060;</span>
          {children}
        </div>
      </div>}
    </>
  )
}

export default Modal
