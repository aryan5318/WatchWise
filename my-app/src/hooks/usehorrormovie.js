import { API_OPTION } from "../utils/constants";
import { addHorrorMovies } from "../utils/movie.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const HorrorMovies=()=>{
    const dispatch=useDispatch()
    const url ='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
       const getUpcomingMovies=async()=>{
           const data= await fetch(url, API_OPTION)
           const json=await data.json()
          
             dispatch(addHorrorMovies(json.results))
          }
          useEffect(()=>{
                 getUpcomingMovies();
          },[])
    }
    export default HorrorMovies
