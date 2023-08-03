import React from 'react'
import Menu from './menu'
import Image from 'next/image'
import { css, cx } from '@emotion/css'
import styles from './menu.module.css'
import Button from '../components/Button/Button'
import withLocation from '../hoc/withLocation'
import useLocalStorage from '../hooks/useLocalStorage'

const Header = (props) => {
   const [data,setData] = useLocalStorage('test')
   console.log('props: ',props.router)
   
   const handelOnClick = () => {
      console.log('Button has been clicked.')
      setData('This is sample info.')
   }

   console.log('LocalStorage Say: ',data)

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

export default withLocation(Header)