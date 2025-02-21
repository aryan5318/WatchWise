import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './movieList'


const SecoundryContainer = () => {
   
    const movies=useSelector((store)=>store.movies)
  return (<div className='bg-black   '>
    <div className='mt-[-210px] max-sm:mt-[-100px] max-sm:ml-[-70px]'>
    <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies}  />
    <MovieList title={"Popular"} movies={movies?.popularMovies}  />
    <MovieList title={"Trending"} movies={movies?.topRatedMovies}  />
    <MovieList title={"Horror"} movies={movies?.addNowPlayingMovies}  />
    <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}  />
    </div>
  </div>
    
  
    
  )
}

export default SecoundryContainer