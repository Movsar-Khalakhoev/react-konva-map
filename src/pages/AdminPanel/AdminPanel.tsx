import React from 'react'
import styles from './AdminPanel.module.sass'
import PageLayout from "../../components/PageLayout/PageLayout"
import Modal from "../../components/Modal/Modal"

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

  const activateZone = (zone: string) => {
    setActiveZone(zone)
    setIsModalOpen(true)
  }

  return (
    <PageLayout>
      <div className={styles.zones}>
        {
          zones.map(zone => (
            <div className={styles.zone}>
              <p className={styles.zoneTitle} onClick={() => activateZone(zone)}>{zone}</p>
            </div>
          ))
        }
      </div>
      <Modal isOpen={isModalOpen} closeHandler={() => setIsModalOpen(false)}>
        <p>{activeZone}</p>
      </Modal>
    </PageLayout>
  )
}

export default AdminPanel
