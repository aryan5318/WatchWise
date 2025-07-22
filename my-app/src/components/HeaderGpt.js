import React, { useEffect } from 'react'
import { CiFaceMeh } from "react-icons/ci";
import { useState } from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userslice";
import {toggleGptSearchView} from '../utils/gptslice';
import NewAIIcon from './NewAiIcon';
import { IoAirplane } from 'react-icons/io5';
const HeaderGpt = () => {
   const dispatch=useDispatch()
    const navigate=useNavigate();
    const [isopen,setIsopen]=useState(false);
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const{uid,email,displayName}=user
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
         navigate("/browse")
        } else {
         dispatch(removeUser())
        navigate("/")
        }
      });
      return () => unsubscribe();
      
    },[])
    const toggleGptSearch=()=>{
      //Toggle GptSearch
      dispatch(toggleGptSearchView())
      
    }
    
    const handleClick=()=>{
       
   signOut(auth).then(() => {
  console.log("User signed out successfully");
            navigate("/")
        }).catch((error) => {
            console.log("eror",error);
        });
    }
  return (<>
    <div className='flex   w-screen  max-sm:mt-3 absolute z-10  bg-gradient-to-b from-black'>
    <NewAIIcon className='  ml-5  mt-2'/>
    <h2 className='text-white font-bold ml-1 mt-5'>WatchWise</h2>
    <IoAirplane onClick={toggleGptSearch} className="text-purple-800 cursor-pointer absolute rounded h-8 w-8 mt-3 ml-[270px] md:ml-[1250px]"/>
  
    <CiFaceMeh onClick={()=>setIsopen(!isopen)} className='w-10 h-10 mt-2 md:ml-[1300px] ml-[220px] cursor-pointer absolute text-purple-800 ' />
    </div> 
    {isopen && <div>
        <ul className="py-3 max-sm:ml-[250px] max-sm:mt-16 ml-[1250px] bg-purple-800 absolute z-10 rounded mt-16  w-28">
            <li className="px-4 py-2 text-white font-bold cursor-pointer hover:underline decoration-white">Profile</li>
            <li className="px-4 py-2pointer text-white font-bold cursor-pointer hover:underline decoration-white">Settings</li>
               
            <li onClick={handleClick} className="px-4 py-2  text-white font-bold cursor-pointer hover:underline decoration-white ">Logout</li>
          </ul>
        </div>}
     
    </>
  )
}

export default HeaderGpt