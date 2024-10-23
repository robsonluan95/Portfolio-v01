import Head from 'next/head'
import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'
 
const Header = () => {
  return (
    <header className={styles.header}>
        <h2 >Robson Luan</h2>
        <nav  >
            <ul className={styles.navList}>
                <li>
                    <Link href='#about'>Sobre mim</Link>
                </li>
                <li>
                    <Link href='#project'>Projetos</Link>
                </li>
                <li>
                    <Link href='#about'>Habilidades</Link>
                </li>
                <li>
                    <Link href='#about'>Contato</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header