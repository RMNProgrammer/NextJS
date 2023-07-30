import React from 'react'
import { css, cx } from '@emotion/css'

const Alert = ({ children, type }) => {
    return( 
        <div
            className={css`
                border: none;
                color: white;
                margin: 10px;
                padding: 32px;
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
            This is an alert
        </div>
    )
}

export default Alert
