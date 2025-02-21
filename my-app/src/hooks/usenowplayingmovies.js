import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movie.slice";
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
    const url= 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      const getCurrentMovies=async()=>{
       const data= await fetch(url, API_OPTION)
       const json=await data.json()
      
         dispatch(addNowPlayingMovies(json.results))
      }
      useEffect(()=>{
             getCurrentMovies()
      },[])
}
export default useNowPlayingMovies