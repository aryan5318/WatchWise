import React from 'react'
import MovieCard from './movieCard'
import './movieList.css';  


const MovieList = ({title,movies}) => {
    if(movies!=null)
   
  return (
    <div className='h-96 max-sm:h-40'>
        <h1 className='text-white font-bold ml-28 font-serif absolute mt-10 '>{title}</h1>
    <div className='flex relative overflow-x-scroll overflow-y-hidden h-96 pl-14 hide-scrollbar'>

       <div className='flex gap-5 max-sm:h-40 overflow-visible h-96 p-14  '>
         {  movies.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id} />
        )} 
        </div>
         </div>
        </div>
  )
}

export default MovieList