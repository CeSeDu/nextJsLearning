import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=bb1bd9bf6865f720ebf88e6c483ec93c`
  )
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  console.log(movieDetail, "movieDetail");
  return (
<div className='relative m-auto min-h-screen container'>
    <Image 
        alt="movieImg"
        fill
        style={{ objectFit: 'cover' }}
        className='absolute inset-0 z-0'
        src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
    />
    <div className='absolute p-12 bg-gray-600 bg-opacity-20 m-12 w-1/3 bottom-0 z-10'>
        <div className="text-3xl font-bold"> {movieDetail?.title}</div>  
        <div> {movieDetail?.overview}</div>  
        <div className="text-black p-5">- {movieDetail?.original_title}</div> 
        <button className="border p-2 px-12 rounded-md hover:bg-white hover:text-black">Watch</button> 
    </div>
</div>

  )
}

export default Page;
