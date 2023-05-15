import React from 'react'
import Card from '@/components/Card';
import Swal from 'sweetalert2';
async function Searchpage({params}) {
    const term = params.term;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${term}&language=en-US&page=1&include_adult=false`);
    if(!res) {
       throw new Error('Something went wrong');
    }
    const data = await res.json();
  return (
    <div>
{data.results.map((item) => (
    <Card item={item} key={item.id}/>
))}
    </div>
  )
}

export default Searchpage
