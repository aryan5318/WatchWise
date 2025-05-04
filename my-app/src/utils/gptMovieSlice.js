import { createSlice } from "@reduxjs/toolkit";
const GptMovieslice=createSlice({
    name:"GptMovie",
    initialState:{
        GptMovieData:null,

    },
    reducers:{
        addGptMovieData:(state,action)=>{
            state.GptMovieData = action.payload
        }
    }
})
export const{addGptMovieData}=GptMovieslice.actions;
export default GptMovieslice.reducer;