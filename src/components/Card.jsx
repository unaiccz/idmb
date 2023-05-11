import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Card({item}) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border
     sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
    <Link href={`/movie/${item.id}`}>
<Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}
width={500}
height={300}
className='sm:rounded-t-lg group-hover:opacity-60 transition-opacity delay-200'
placeholder='blur'
blurDataURL='/lod.vg'

/>
    </Link>
    </div>
  )
}

export default Card
