import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        trailerVideo:null,
        popularMovies:null,
        upcomingMovies:null,
        topRatedMovies:null,
        hororMovies:null,
        history:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
           state.topRatedMovies=action.payload
        },
        addHorrorMovies:(state,action)=>{
           state.hororMovies=action.payload
        },
        addCorrect:(state,action)=>{
            state.history=action.payload
        }


    }
})
export const { addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies,addHorrorMovies,addCorrect } = movieSlice.actions
export default movieSlice.reducer