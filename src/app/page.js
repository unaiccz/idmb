import Result from '@/components/Result';
import Image from 'next/image'
const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
   const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTrending" ? "trending/movie/week" : "movie/top_rated/"}?api_key=${API_KEY}`);
  const data = await res.json();
  const movies = data.results;
  return (
   <>
<Result result={movies} className="text-center"/>   
   
   
   </>
  )
  }
