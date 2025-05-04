import { createSlice } from "@reduxjs/toolkit";
const GptSlice=createSlice({
    name:"GPT",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
       toggleGptSearchView:(state)=>{
       state.showGptSearch=!state.showGptSearch
       }
    }
})
export const{toggleGptSearchView}=GptSlice.actions;
export default GptSlice.reducer;