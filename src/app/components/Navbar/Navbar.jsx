import WrapperContainer from "../WrapperContainer";

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <WrapperContainer>
            <nav className={styles.navbarMain}>
                <h1>navbar</h1>
            </nav>
        </WrapperContainer>
    )
}