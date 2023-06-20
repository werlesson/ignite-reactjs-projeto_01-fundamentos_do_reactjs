import React from "react";
import styles from './styles.module.css'

import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo da aplicação" />
            <strong>Ignite Feed</strong>
        </header>
    )
}