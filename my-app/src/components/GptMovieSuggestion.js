import React from 'react';
import { useSelector } from 'react-redux';
import { IoPlayCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export const GptMovieSuggestion = () => {
  const navigate=useNavigate()
  const movieData = useSelector((store) => store?.gptMovies?.GptMovieData);

  if (!movieData || movieData.length === 0) {
    return <div className='md:w-[900px] w-[200px] md:ml-24 ml-8'>
     
      <p className="text-black mt-4 md:text-7xl text-3xl">Discover Your Perfect Movie with <span className='text-purple-800'>AI Recommendations</span></p>
    <p className='font-thin'>Find your next favorite movie with our <span className='text-purple-800'>AI-powered recommendation system</span> . Get personalized suggestions based on your unique preferences and discover films you’ll love!</p>
    </div> }

  return (
    <>
    <div className="flex flex-wrap gap-4 mt-4 ml-48">
      {movieData.map((movieList, index) => {
        const movie = movieList?.[0]; // Get the first result for each movie name

        
        if (movie==null || !movie.poster_path) return null;

        return (
          <div className="  w-40 max-sm:w-14 max-sm:h-24 mt-7 rounded  transition-all duration-300 ease-out 
          transform hover:scale-150 hover:translate-y-[-10px] cursor-pointer hover:z-50 hover:shadow-2xl max-sm:hover:scale-100 ">
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-md"
            />
            <IoPlayCircleSharp onClick={()=>  navigate(`/video/${movie?.id}`)} className="absolute bottom-2 left-2 text-white text-5xl hover:text-purple-800" />
          </div>
        );
        
      })}
    </div>
    
    </>
  );
};
