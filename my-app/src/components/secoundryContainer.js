import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './movieList';
import { getWatchHistory } from '../connect/like';
import History from './history';
import ShimmerCard from './shimmer';
const SecoundryContainer = () => {
  const email = useSelector((store) => store.user?.email);
  const [historyw, setHistoryw] = useState([]);
  

  useEffect(() => {
    const fetchWatchHistory = async () => {
      if (email ) {
       
        const data = await getWatchHistory(email);
        setHistoryw(data || []);
      }
    };
    fetchWatchHistory();
  }, [email]); // email is required so we know when it's available

  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="mt-[-210px] max-sm:mt-[-100px] max-sm:ml-[-90px]">
        {historyw.length > 0 ? <History title="Watch History" movies={historyw} email={email} />:<ShimmerCard/>}
        <MovieList title="Now Playing" movies={movies?.addNowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Trending" movies={movies?.topRatedMovies} />
        <MovieList title="Top Rated Movies" movies={movies?.hororMovies} />
        <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecoundryContainer;
