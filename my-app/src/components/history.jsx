import React, { use, useEffect, useState } from 'react';
import { API_OPTION } from '../utils/constants';
import MovieCard from './movieCard';
import MovieCard1 from './historycard';
import { addHistoryData } from '../utils/gptMovieSlice';
import { useDispatch } from 'react-redux';

const History = ({ title, movies, email }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const dispatch=useDispatch()

  useEffect(() => {
    const fetchDetails = async () => {
      
      if (!movies || movies.length === 0  ) return;

    

      const uniqueIds = [...new Set(movies.map((movie) => movie.movieId))];
      uniqueIds.reverse();
      const fetchedDetails = await Promise.all(
        uniqueIds.map(async (movieId) => {
          try {
            const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
            const res = await fetch(url, API_OPTION);
            return await res.json();
        
          } catch (err) {
            
            return null;
          }
             
        })
      );
         dispatch(addHistoryData(movieDetails))
     setMovieDetails(fetchedDetails.filter((movie) => movie !== null));
          
          
    };

    fetchDetails();
    
  }, [email]); 
 
    
  return (
    <div className='h-56 max-sm:h-40'>
      <h1 className='text-white font-bold ml-28 font-serif absolute mt-10'>
        {title}
      </h1>
      <div className='flex relative max-sm:h-40 overflow-x-scroll overflow-y-hidden scrollbar-hide h-96 pl-14'>
        <div className='flex gap-5 max-sm:h-40 h-96 p-14'>
          
          {movieDetails.map((movie) => (
            <MovieCard1
              key={movie.id}
              posterPath={movie.poster_path}
              id={movie.id}
              title={movie.original_title}
              dis={movie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
