import Navbar from '@/app/components/Navbar'
import styles from './AppointmentComp.module.css'

export default function AppointmentComp() {
    return (
        <div className={styles.appointmentCompMain}>
            <Navbar />
            <h1>Appointment Comp</h1>
        </div>
    )
}