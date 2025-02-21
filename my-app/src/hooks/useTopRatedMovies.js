import { API_OPTION } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movie.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const useTopRatedMovies=()=>{
    const dispatch=useDispatch()
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
       const getTopRatedMovies=async()=>{
           const data= await fetch(url, API_OPTION)
           const json=await data.json()
          
             dispatch(addTopRatedMovies(json.results))
          }
          useEffect(()=>{
                 getTopRatedMovies()
          },[])
    }
    export default useTopRatedMovies
