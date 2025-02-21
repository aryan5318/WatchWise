import React from 'react'
import { useParams } from 'react-router-dom'
import UseMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'



const VideoCardComponent = () => {
  const {id}=useParams()
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  UseMovieTrailer(id)


  if(!trailerVideo) return ;

  return (<div className='bg-black h-screen '>
<iframe className='w-screen aspect-video mt-[-5rem] max-sm:absolute max-sm:mt-[150px]' src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1&mute=0&controls=1" }frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

</div>
    
  )
}

export default VideoCardComponent