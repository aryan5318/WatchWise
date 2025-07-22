import React from 'react'
import VideoTitle from './videotitile'
import Backgroundvideo from './backgroundvideo'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.addNowPlayingMovies);
    if(!movies) return null;
    const mainMovie=movies[3]
   
    return (<>
     <VideoTitle title={mainMovie?.title} overview={mainMovie?.
overview} id={mainMovie?.id}/>
     <Backgroundvideo id={mainMovie.id}/>
    </>)
}
export default MainContainer