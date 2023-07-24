import React from 'react'
import Head from 'next/head'
import { css, cx } from '@emotion/css'
import Menu from '../Components/menu'
import Button from '../Components/button'

export default function emotiontest(){
   const color = '#e74c3c'
   const backgroundColor = '#f1c40f'
   return (
      <>
         <Head>
            <title>emotion-test</title>
         </Head>
         <main>
            <Menu />
            <h1
               className={css`
               color: white;
               padding: 32px;
               font-size: 24px;
               margin: 2.5rem 10px;
               border-radius: 4px;
               border: 3px solid white;
               background-color: ${backgroundColor};
                  &:hover {
                     color: ${color};
                     border: 3px solid ${color};
                  }
               `}
            >
               Hello everybody, We are testing emotion js...
            </h1>
            <Button type="primary"> 
               Click Here 
            </Button>
            <Button type="secondary"> 
               Click Here 
            </Button>
         </main>  
      </>
   )
}