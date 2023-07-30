import React from 'react'
import Head from 'next/head'
import Layout from '../containers/layout'

export default function contact() {
   return (
      <>
         <Head>
            <title>Next App - Contact</title>
         </Head>
         <main>
            <Layout>
               <h3 className="text">This is Contact page</h3>
            </Layout>
         </main>
      </>
  )
}
