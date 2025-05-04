import React from 'react'
import { ai } from '../hooks/openai';
import { useRef } from 'react';
import { API_OPTION } from '../utils/constants';
import { addGptMovieData } from '../utils/gptMovieSlice';
import { useDispatch } from 'react-redux';
import AIIcon from './Aicomp';





export const GptSearchBar = () => {
  const dispatch = useDispatch();
  const MovieRef=useRef(null);
  const FetchDataBymovieName=async(movie)=>{
      const url = 'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1'
      
      const result=await fetch(url, API_OPTION);
      const json=await result.json();
      return json.results

  }
  async function main() {
    const query="Act as Movie Recommendation system suggest some movie for the query: "+ MovieRef.current.value+"only give me 5 movies like example given ahead donot give anything extra .example result:spiderman,Panchayat,Catputli,Kesari,Tumbad.  in form of array not text. i told you donto write any thing than the example result strictly. donot write word like ok i understand.donot write anything other than movie"
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents:query,
    });
    const movieName=(response?.candidates
      [0]?.content?.parts[0].text?.split(',') );
     const movieData= movieName.map((movie)=>FetchDataBymovieName(movie));
     const allMovieData = await Promise.all(movieData);
    console.log(allMovieData);
    dispatch(addGptMovieData(allMovieData));

      
  }  
  
  
  
  return (
    <div className=' h-16 w-[900px] flex items-center justify-center  '>
       <AIIcon/><input ref={MovieRef} className='w-96 h-10 pl-3 text-black border-2 border-purple-800  font-bold rounded ' placeholder='Which type of movie you want to watch'/>
    <button className='bg-purple-800 w-24 h-10 ml-2 rounded hover:bg-pink-800' onClick={main}>Search</button>
    </div>
  )
}
