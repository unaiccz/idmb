import React from 'react'
import Image from 'next/image'
 async function  page({params}) {
    const movieId = params.id
console.log(movieId)

 const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
 if (!res) {
     throw new Error('Failed to fetch API')
 }
const movie = await res.json()



  return (
    <div className='w-full'>
<div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
<Image src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}
width={500}
height={300}
className='sm:rounded-t-lg group-hover:opacity-60 transition-opacity delay-200'
placeholder='blur'
blurDataURL='/lod.svg'
alt='movie'
style={
  {maxWidth:'100%', height:'auto'}
}
/>
</div>

    </div>

  )
}

export default page
