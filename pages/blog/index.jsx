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
        <h3 className="text">This is Blog page</h3>
        <p>Enter anything after /blog/</p>
      </main>
      <style jsx>{`
        p{
          display: block;
          font-size: 25px;
          text-align: center;
          font-style: italic;
          color: blueviolet;
        }

        p:hover{ 
          color: orange; 
        }
      `}</style>
    </>
  )
}
