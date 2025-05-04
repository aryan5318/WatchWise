import React from 'react'
import UseMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';
const Backgroundvideo = ({id}) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
   UseMovieTrailer(id)
  
  return (
    <div className='w-screen mt-[-100px]  max-sm:mt-[-20px]'><iframe 
    className='w-screen aspect-video ' 
    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0`} 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  ></iframe>
  </div>
  )
}

export default Backgroundvideo