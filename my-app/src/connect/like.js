import axios from 'axios';


const LikeMovie=async(email,movieId)=>{
  if (!email || !movieId) {
    console.warn("Missing email or movieId");
    return;
  }
    try{
        const res=await axios.post('http://localhost:4000/api/preferences/like',{
            email,
            movieId
        });
        console.log('Liked Movies:'+ res);
    }
    catch(error){
        console.log('Error:'+error);

    }
}
 export const DislikedMovies=async(email,movieId)=>{
   try{
      const res=axios.post("http://localhost:4000/api/preferences/deleteliked",{
         email,
         movieId
      }
    )
     console.log('disliked Movies:'+ res);
   } 
   catch(error){
     console.log('Error:'+error);
   }
}
export const CheckIfLiked = async (email, movieId) => {
  try {
    const response = await axios.get('http://localhost:4000/api/preferences/isLiked', {
      params: { email, movieId }
    });
 if(response)
    return response.data.isLiked;
  } catch (error) {
    console.error('CheckIfLiked error:', error.message);
    return false; // or null, or throw the error if you want
  }
};


export const watchHistoryf=async(email,movieId)=>{
  try{ 
   const res= await axios.post("http://localhost:4000/api/preferences/history",{
     email,
     movieId
   })
   console.log(res);
  }
  catch(error){
    console.log(error);
  }
  

}
export const getWatchHistory=async(email)=>{
  try{
    const response= await axios.get("http://localhost:4000/api/preferences/watchhistory",  {params:{email}})
    return response.data;
  } catch(error){

  }
}
export const geminiUser=async(email)=>{
   try{
    const response= await axios.get("http://localhost:4000/api/preferences/gemini",  {params:{email}})
    return response.data;
  } catch(error){

  }
}
export default LikeMovie ;


