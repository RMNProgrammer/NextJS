import React from 'react'
import Head from 'next/head'
import Menu from '../Components/menu'

export default function about() {
  return (
    <>
      <Head>
        <title>Next App - About</title>
      </Head>
      <main>
        <Menu />
        <p className="text">This is About page</p>
      </main>
    </>
  )
}
