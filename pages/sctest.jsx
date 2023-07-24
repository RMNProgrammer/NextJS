import React from 'react'
import Head from 'next/head'
import Menu from '../Components/menu'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  color: blueviolet;
  margin: 15rem 15rem 2rem;
`;

const Description = styled.p`
   font-size: 25px;
   text-align: center;
   font-style: italic;
   color: blueviolet
`

export default function sctest() {
   return (
      <>
         <Head>
            <title>styled-components-test</title>
         </Head>
         <main>
            <Menu />
            <Title>Hello everybody</Title>
            <Description>This page for testing styled components css in js</Description>
         </main>
      </>
    )
}