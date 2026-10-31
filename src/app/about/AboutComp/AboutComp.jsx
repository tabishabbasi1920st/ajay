import Navbar from "@/app/components/Navbar";

import styles from './AboutComp.module.css'
import SectionSpacer from "@/app/components/SectionSpacer";

export default function AboutComp() {
    return (
        <div className={styles.aboutCompMain} >
            <Navbar />
            <SectionSpacer/>
            <h1>About Comp</h1>
        </div>
    )
}