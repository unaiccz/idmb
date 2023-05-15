'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

function Search() {
  const router = useRouter();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid keyword!',
      })
      return;
    }
  router.push(`/search/${search}`);
  }
  const [search, setsearch] = useState('');
  return (
    <form className='flex max-w-6xl' onSubmit={handlesubmit}>
<input type="text" placeholder='search kwords...' className='w-full rounded-sm h-14 placeholder-gray-500 first-letter:outline-none bg-transparent' onChange={(e) =>setsearch(e.target.value)} /><button type='submit' className='text-amber-500 mr-4'>Search</button>
    </form>
  )
}

export default Search
