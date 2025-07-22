
import { IMG_CDN } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { SlLike } from "react-icons/sl";
import LikeMovie from '../connect/like';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { DislikedMovies } from '../connect/like';
import { CheckIfLiked } from '../connect/like';
import { useEffect } from 'react';
import { watchHistoryf } from '../connect/like';

const MovieCard = ({ posterPath, id }) => {
  


  const email = useSelector((state) => state.user?.email);
  
    const [clicked,setClicked]=useState(false);
    useEffect(() => {
    if (email && id  ) {
      CheckIfLiked(email, id).then((isLiked) => {
        setClicked(isLiked);
      });
    }
  }, [email, id]);
 
  const navigate = useNavigate()
  return (
    <div className=" group md:w-36 md:h-60 w-16 h-28  mt-7 rounded  transition-all duration-300 ease-out 
    transform hover:scale-150 hover:translate-y-[-10px]  hover:z-50 hover:shadow-2xl max-sm:hover:scale-100   ">
      <img
        className="w-full h-full object-cover rounded "
        alt="imgcard"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      />
      <IoPlayCircleSharp onClick={async() =>{  navigate(`/video/${id}`) 
       watchHistoryf(email, id)}} className="absolute cursor-pointer bottom-2 left-2 text-white text-2xl md:text-5xl hover:text-purple-800" />
      <SlLike onClick={() =>{ 
        if(clicked && email && id){
          DislikedMovies(email,id);
          setClicked(!clicked)
        }
        else if(email && id){ 
         
        LikeMovie(email, id)
        setClicked(!clicked)}}
      } className={ `absolute bottom-4 left-24 text-2xl md:text-4xl opacity-0 ${clicked? 'text-red-600' : 'text-purple-600'} group-hover:opacity-100 cursor-pointer`} />
    </div>
  )
}

export default MovieCard;
