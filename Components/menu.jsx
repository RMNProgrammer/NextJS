import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './menu.module.css'

const inter = Inter({ subsets: ['latin'] })

function Menu() {
  return (
    <header>
      <div className={styles.left}>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

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
