import Movies from '@/components/Movies';
import React from 'react'

const page = async ({searchParams}) => {

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre  : "trending/all/day"}?api_key=bb1bd9bf6865f720ebf88e6c483ec93c&language=en-us&page=1`, {next: {revalidate: 10000}})
  
  const data = await res.json();

  console.log(data,"data");
  return (
    <div className='flex item-center flex-wrap gap-3 items-center justify-center'>
      {
        data?.results?.map((dt,i)=>(
          <Movies key={i} dt={dt}/>
        ))
      }
    </div>
  )
}

export default page