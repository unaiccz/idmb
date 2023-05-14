import React from 'react'
import React, { useState } from 'react';

function Search() {
  return (
    <form className='flex max-w-6xl'>
<input type="text" placeholder='search kwords...' className='w-full rounded-sm h-14 placeholder-gray-500 first-letter:outline-none bg-transparent'/>
<button type='submit' className='text-amber-500 mr-4'>Search</button>
    </form>
  )
}

export default Search
