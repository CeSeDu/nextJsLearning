import React from 'react'
import Movies from '@/components/Movies';

const Page = async ( { params } ) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bb1bd9bf6865f720ebf88e6c483ec93c&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json();
    
    console.log(data?.results, "data")
  return (
    <div>
        {
            !data?.results ?
            <div>Aranılan şey bulunamadı..</div>:
            <div className='flex items-center flex-wrap '>
              {
                data?.results?.map((dt,i)=>(
                    <div className='flex-1 flex gap-6 p-3'>
                       <Movies  key={i} dt={dt}/>
                    </div>
     
                ))
            }
            </div>
        }
    </div>
  )
}

export default Page