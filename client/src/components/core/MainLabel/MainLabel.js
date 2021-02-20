import React from 'react'
import styles from './MainLabel.module.css'

const MainLabel = ({ text }) => {
    return (
        <h2 className={styles.mainLabel}>{text}</h2>
    )
}

export default MainLabel