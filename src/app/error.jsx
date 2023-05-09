'use client'
import React from 'react'
import { useEffect } from 'react'
function error({error, reset}) {
    useEffect(() => {
        console.log(error)
    
  return (
    <div>
      <h1>Error--</h1>
    </div>
  )
}

export default error
