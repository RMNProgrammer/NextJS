import React from 'react'
import Menu from './menu'
import Image from 'next/image'
import styles from './menu.module.css'
import { css, cx } from '@emotion/css'
import Button from '../components/button'

const Header = (props) => {
   console.log('props',props)
   const handelOnClick = () => {
      console.log('Button has been clicked.')
   }

   return(
      <div
         className={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
         `}
      >
         <div className={styles.left}>
            <Image
               src="/next.svg"
               alt="Next.js Logo"
               width={180}
               height={35}
               priority
            />
         </div>
         <Menu />
         <div>
            <Button onClick={handelOnClick}>Login</Button>
            <Button onClick={handelOnClick}>Sign-up</Button>
         </div>
      </div>
   )
}

export default Header