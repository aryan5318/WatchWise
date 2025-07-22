import { createSlice } from "@reduxjs/toolkit";
const GptMovieslice=createSlice({
    name:"GptMovie",
    initialState:{
        GptMovieData:null,
        historyData:[],

    },
    reducers:{
        addGptMovieData:(state,action)=>{
            state.GptMovieData = action.payload
        },
        addHistoryData:(state,action)=>{
            state.historyData=action.payload
        }
    }
})
export const{addGptMovieData,addHistoryData}=GptMovieslice.actions;
export default GptMovieslice.reducer;