import React from 'react'
import Button from './Button'

export default { title: "Button" };

export const primary = () => <Button>Primary</Button>

export const secondary = () => <Button type="secondary">Secondary</Button>

export const loading = () => <Button loading />