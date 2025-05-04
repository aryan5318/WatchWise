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

const Browse=()=>{
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
    
   useNowPlayingMovies();
   usePopularMovies();
   useUpcomingMovies();
   useTopRatedMovies();

    return <div className="bg-black">
    {
    showGptSearch? (<>
    <HeaderGpt/>
    <GptSearch/>
    </>):( 
   
    <>
    <Headerbrowse/>
    <MainContainer/>
    <SecoundryContainer/>
    </>
    )
         }
    
    </div>
}
export default Browse;