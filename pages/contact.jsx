import React from 'react'
import Head from 'next/head'
import Menu from '../Components/menu'

export default function contact() {
  return (
    <>
      <Head>
        <title>Next App - Contact</title>
      </Head>
      <main>
        <Menu />
        <p className="text">This is Contact page</p>
      </main>
    </>
  )
}
