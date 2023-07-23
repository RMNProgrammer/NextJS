import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import styles from './blog.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function article() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <Head>
        <title>Next App - Blog</title>
      </Head>
      <main className={inter.className}>
        <div className={styles.blogPost}>
          <Link legacyBehavior href="/blog">
            <a className={styles.blogPost} href="/blog">
              Blog
            </a>
          </Link>
          <p className={styles.blogPost}> / {slug}</p>
        </div>
      </main>
    </>
  )
}
