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


//  --------------------------------------------------------------------
  return (

    <div className="w-full">
      {/* image of the movie */}
      <div className=' p-4 md:p-8 flex flex-col md:flex-row
      
      items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image  
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
         alt="movie poster" 
         width={500} 
         height={300} 
         className='sm:rounded-lg'
         />
         <div className="p-2">
          <p><span className='text-font-semibold mb-4'>{movie.overview}</span></p>
         <h2 className='text-lg text-bold mt-4'>{movie.title}</h2>
         <p className='mt-4'>{movie.release_date}</p>
         {/* now the ratins on a span */}
          <span className='text-yellow-400'> Rating: {movie.vote_average}</span>
         </div>
      </div>
      
      
  </div>
   )
}

export default page
