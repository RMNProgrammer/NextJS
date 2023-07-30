import React from 'react'
import Header from './headers'

const Layout = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
)

export default Layout