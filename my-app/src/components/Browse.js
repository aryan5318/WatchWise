import Headerbrowse from "./headerbrowse";
import useNowPlayingMovies from "../hooks/usenowplayingmovies";
import MainContainer from "./maincontainer";
import SecoundryContainer from "./secoundryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse=()=>{
    
   useNowPlayingMovies();
   usePopularMovies();
   useUpcomingMovies();
   useTopRatedMovies();

    return <>
    <Headerbrowse/>
    <MainContainer/>
    <SecoundryContainer/>
    
    </>
}
export default Browse;