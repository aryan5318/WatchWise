import Headerbrowse from "./headerbrowse";
import useNowPlayingMovies from "../hooks/usenowplayingmovies";
import MainContainer from "./maincontainer";
import SecoundryContainer from "./secoundryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import HeaderGpt from "./HeaderGpt";
import HorrorMovies from "../hooks/usehorrormovie";
import MainShimmer from "./shimmermainvideo";
import Usegeminiuser from "../hooks/usegeminiuser";

const Browse = () => {

     const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
     const movies = useSelector((store) => store.movies.hororMovies)
     console.log(movies)
     useNowPlayingMovies();
     usePopularMovies();
     useUpcomingMovies();
     useTopRatedMovies();
     HorrorMovies();
     Usegeminiuser();
     return <div className="bg-black">
          {
               showGptSearch ? (<>
                    <HeaderGpt />
                    <GptSearch />
               </>) : (


                    movies ? (<><Headerbrowse />
                         <MainContainer />
                         <SecoundryContainer /></>): (<><MainShimmer /></>)
               )
   
    
}

     </div>
}
export default Browse;