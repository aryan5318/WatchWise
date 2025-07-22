import { geminiUser } from "../connect/like";
import { addCorrect } from "../utils/movie.slice";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Usegeminiuser = () => {
 const email = useSelector((state) => state.user?.email);
  const dispatch = useDispatch();
 if( email){
  console.log(email);
 }

  useEffect(() => {
    const fetchData = async () => {
        console.log ("h0")
      if (email) { 
     console.log("hello ")
      try {
        const data = await geminiUser(email);
        console.log("data")
        dispatch(addCorrect(data)); 
      } catch (error) {
        console.error("Error in geminiUser:", error);
      }
    };
    }
    fetchData();
  }, [email]);

};

export default Usegeminiuser;
