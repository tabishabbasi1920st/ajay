import Navbar from '@/app/components/Navbar'
import styles from './AppointmentComp.module.css'
import SectionSpacer from '@/app/components/SectionSpacer'

export default function AppointmentComp() {
    return (
        <div className={styles.appointmentCompMain}>
            <Navbar />
            <SectionSpacer />
            <h1>Appointment Comp</h1>
        </div>
    )
}