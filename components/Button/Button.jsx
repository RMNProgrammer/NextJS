import React from 'react'
import { css, cx } from '@emotion/css'
import withLocation from '../../hoc/withLocation'

const Button = ({ children, type = 'primary', onClick, location, loading }) => {
   console.log('props: ',location)

   return( 
      <button
         onClick={onClick}
         className={css`
            border: none;
            color: white;
            margin: 5px;
            padding: 15px;
            cursor: ${ loading ? 'default' : 'pointer'};
            font-size: 18px;
            border-radius: 27px;
            background-color: ${ type === 'secondary' ? '#3498db' : '#e74c3c' };
            background-color: ${ loading && 'gray' };
               &:hover {
                  color: #34495e;
                  font-size: 18px;
                  background-color: ${ loading ? 'gray' : '#f1c40f' };
               }
         `}
      >
         {loading && '' }
         {!loading && children}
      </button>
   )
}

export default withLocation(Button)
