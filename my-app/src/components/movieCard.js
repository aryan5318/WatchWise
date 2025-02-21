import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
const MovieCard = ({ posterPath,id }) => {
  const navigate=useNavigate()
  return (
    <div  onClick={()=>  navigate(`/video/${id}`)} className="  w-36 h-60 max-sm:w-14 max-sm:h-24 mt-7 rounded  transition-all duration-300 ease-out 
    transform hover:scale-150 hover:translate-y-[-10px] cursor-pointer hover:z-50 hover:shadow-2xl max-sm:hover:scale-100 ">
      <img 
        className="w-full h-full object-cover rounded " 
        alt="imgcard" 
        src={IMG_CDN + posterPath} 
      />
    </div>
  )
}

export default MovieCard;
