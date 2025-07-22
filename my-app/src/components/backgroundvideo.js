import React from 'react'
import { useState } from 'react';
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import MainShimmer from './shimmermainvideo';
const Backgroundvideo = ({id}) => {
      const [trailer,settrailer]=useState(null)
     
      const url = 'https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US';
      const mainMovieTrailer=async()=>{
          const data=await fetch( url,API_OPTION)
          const json=await data.json()
         
          const filterdata=json.results.filter(video=>video.type==="Trailer")
          const trailert= filterdata.length?filterdata[1]:json.results[0]
          settrailer(trailert)
          
      }
      useEffect(()=>{
          mainMovieTrailer()
      },[])
  
  
   
  
  return (
    
    
    <div className='w-screen mt-[-100px]  max-sm:mt-[-20px]'>
      {trailer?<iframe 
    className='w-screen aspect-video '

    src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0`} 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  ></iframe>:<MainShimmer/>}
  </div>)
 
}

export default Backgroundvideo