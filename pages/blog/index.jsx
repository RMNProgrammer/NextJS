import React from 'react'
import Head from 'next/head'
import Menu from '../../Components/menu'

export default function blog() {
  return (
    <>
      <Head>
        <title>Next App - Blog</title>
      </Head>
      <main>
        <Menu />
        <p className="text">This is Blog page</p>
        <p className="subline">Enter anything after /blog/</p>
      </main>
    </>
  )
}
