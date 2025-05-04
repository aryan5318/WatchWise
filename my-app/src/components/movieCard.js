import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { IoPlayCircleSharp } from 'react-icons/io5'
const MovieCard = ({ posterPath,id }) => {
  console.log("Image URL:", IMG_CDN + posterPath);
  const navigate=useNavigate()
  return (
    <div   className="  w-36 h-60 max-sm:w-14 max-sm:h-24 mt-7 rounded  transition-all duration-300 ease-out 
    transform hover:scale-150 hover:translate-y-[-10px] cursor-pointer hover:z-50 hover:shadow-2xl max-sm:hover:scale-100 ">
      <img 
        className="w-full h-full object-cover rounded " 
        alt="imgcard" 
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      />
       <IoPlayCircleSharp onClick={()=>  navigate(`/video/${id}`)} className="absolute bottom-2 left-2 text-white text-5xl hover:text-purple-800" />
    </div>
  )
}

export default MovieCard;
