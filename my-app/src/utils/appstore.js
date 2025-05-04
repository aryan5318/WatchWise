import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userslice'
import moviesReducer from './movie.slice'
import GptReducer from './gptslice'
import GptMovieReducer from './gptMovieSlice'
const appstore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:GptReducer,
            gptMovies:GptMovieReducer,
        },
    }
)
export default appstore