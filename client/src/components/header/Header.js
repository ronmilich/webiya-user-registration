import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.NavigationPanel}>
                <div className={styles.logo}>
                    <img src="/logo.jpg" alt="Webiya Logo" />

                </div>
                <ul className={styles.nav}>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/users">Users List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
