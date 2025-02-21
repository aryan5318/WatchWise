import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movie.slice";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
const UseMovieTrailer=(id)=>{
    const dispatch=useDispatch()
   
    const url = 'https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US';
    const mainMovieTrailer=async()=>{
        const data=await fetch( url,API_OPTION)
        const json=await data.json()
       
        const filterdata=json.results.filter(video=>video.type==="Trailer")
        const trailer= filterdata.length?filterdata[1]:json.results[0]
        
        dispatch(addTrailerVideo(trailer))
        
    }
    useEffect(()=>{
        mainMovieTrailer()
    },[])
}
export default UseMovieTrailer
