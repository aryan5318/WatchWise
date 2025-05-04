import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMovieSuggestion } from './GptMovieSuggestion'
const GptSearch = () => {
  return (
   
    <div className='absolute w-screen h-screen
     mt-20  '>
    <GptSearchBar/>
    <GptMovieSuggestion />
    </div>
    
  )
}

export default GptSearch