
import Link from 'next/link'
import styles from './Navbar.module.css'

const navLinks = [
    {
        id: "home",
        href: "/",
        name: "Home"
    },
    {
        id: "about",
        href: "/about",
        name: "About"
    },
    {
        id: "appointment",
        href: "/appointment",
        name: "Appointment"
    }
]

export default function Navbar() {
    return (
        <nav className={styles.navbarMain}>

            {/* Left Container */}
            <div className={styles.navbarLeftContainer}>
                <h2>Logo</h2>
            </div>

            {/* Right Container */}
            <div className={styles.navbarRightContainer}>
                {
                    navLinks.map((link) => {
                        return (
                            <Link
                                key={link.id}
                                href={link.href}
                            >{link.name}</Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}