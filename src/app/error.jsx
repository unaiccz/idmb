'use client'
import React, { useState, useEffect } from 'react';

function error({error, reset}) {
  useEffect(() => {

console.log(error)



  },[error])
  return (
    <div className='text-center mt-10'>
      <h1>something went wrong😢😢</h1>
      <button onClick={() => {reset()}} className='hover:text-amber-500'>Try Again</button>
    </div>
  )
}

export default error
