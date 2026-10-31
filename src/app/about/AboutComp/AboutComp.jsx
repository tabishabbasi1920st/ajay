import Navbar from "@/app/components/Navbar";

import styles from './AboutComp.module.css'

export default function AboutComp() {
    return (
        <div className={styles.aboutCompMain}>
            <Navbar />
            <h1>About Comp</h1>
        </div>
    )
}