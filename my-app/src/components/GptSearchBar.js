import React from 'react'
import { ai } from '../hooks/openai';
import { useRef } from 'react';
import { API_OPTION } from '../utils/constants';
import { addGptMovieData } from '../utils/gptMovieSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AIIcon from './Aicomp';





export const GptSearchBar = () => {

  const dispatch = useDispatch();
  const userdata=useSelector((store)=>store.movies?.history)
  const MovieRef=useRef(null);
  const FetchDataBymovieName=async(movie)=>{
      const url = 'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1'
      
      const result=await fetch(url, API_OPTION);
      const json=await result.json();
      return json.results

  }
  async function main() {
    if(userdata){ 
    const query = `
Act as Movie Recommendation System. Suggest 5 movies based on the query: "${MovieRef.current.value}".
provie me 10 movies in the format shown in the example. Do NOT include anything else.
Example result: spiderman,Panchayat,Catputli,Kesari,Tumbad
Only return the result as an array, no extra text.

User watch history and liked movies are provided as TMDB IDs in the following user data:
${userdata.likedMovies} donot provide me tmdb id provie me movie 5 or more name


Strictly use the provided user data for suggestions. Do NOT respond with acknowledgments like "ok" or "I understand".
Do NOT write anything other than the movie list.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents:query,
    });
    console.log(response)
    const movieName=(response?.candidates
      [0]?.content?.parts[0].text?.split(',') );
     const movieData= movieName.map((movie)=>FetchDataBymovieName(movie));
     const allMovieData = await Promise.all(movieData);
    console.log(allMovieData);
    dispatch(addGptMovieData(allMovieData));

      
  }  
}
  
  
  return (
    <div className=' h-16 md:w-[900px] flex items-center justify-center  '>
       <AIIcon /><input ref={MovieRef} className='md:w-96 md:h-10 md:pl-3 w-40 h-10 text-black border-2 border-purple-800  font-bold rounded ' placeholder='Which type of movie you want to watch'/>
    <button className='bg-purple-800 w-24 h-10 ml-2 rounded hover:bg-pink-800' onClick={main}>Search</button>
    </div>
  )
}
