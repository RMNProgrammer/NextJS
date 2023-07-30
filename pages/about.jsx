import React from 'react'
import Head from 'next/head'
import Layout from '../containers/layout'

export default function about() {
   return (
      <>
         <Head>
            <title>Next App - About</title>
         </Head>
         <main>
            <Layout>
               <h3 className="text">This is About page</h3>
            </Layout>
         </main>
      </>
  )
}
