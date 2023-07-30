import React from 'react'
import Link from 'next/link'
import styles from './menu.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Menu() {
  return (
    <header>
      <div className={`${styles.menu} ${inter.className}`}>
        <Link legacyBehavior href="/">
          <a className={styles.item} href="/">
            Home
          </a>
        </Link>
        <Link legacyBehavior href="/blog">
          <a className={styles.item} href="/blog">
            Blog
          </a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={styles.item} href="/about">
            About us
          </a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a className={styles.item} href="/contact">
            Contact us
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Menu
