import React from 'react'
import { useCounter } from '../hooks/use-counter'

const Counter2 = () => {
    const counter = useCounter(false)
  return (
    <div>{counter}</div>
  )
}

export default Counter2