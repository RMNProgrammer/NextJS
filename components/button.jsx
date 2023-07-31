import React from 'react'
import { css, cx } from '@emotion/css'
import withLocation from '../hoc/withLocation'

const Button = ({ children, type, onClick, location }) => {
   console.log('props: ',location)

   return( 
      <button
         onClick={onClick}
         className={css`
            border: none;
            color: white;
            margin: 5px;
            padding: 15px;
            cursor: pointer;
            font-size: 18px;
            border-radius: 27px;
            background-color: ${ type === 'primary' ? '#3498db' : '#e74c3c' };
               &:hover {
                  color: #34495e;
                  font-size: 18px;
                  background-color: #f1c40f;
               }
         `}
      >
         {children}
      </button>
   )
}

export default withLocation(Button)
