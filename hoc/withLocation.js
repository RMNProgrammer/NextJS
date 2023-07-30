import React from 'react'
import { useRouter } from 'next/router'

const withLocation = (MyComponent) => props => {
    const router = useRouter()
    return <MyComponent location="This message come from withLocation.js for button" router={router} {...props} />
}

export default withLocation