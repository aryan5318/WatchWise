import React, { useEffect } from 'react'
import { CiFaceMeh } from "react-icons/ci";
import { useState } from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userslice";
const Headerbrowse = () => {
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
    
    const handleClick=()=>{
       
   signOut(auth).then(() => {
  console.log("User signed out successfully");
            navigate("/")
        }).catch((error) => {
            console.log("eror",error);
        });
    }
  return (<>
    <div className='flex justify-between w-screen mt-24 max-sm:mt-3 absolute z-10  bg-gradient-to-b from-black'>
    <img className=" w-28 mt-1 ml-9   " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"></img>
    <CiFaceMeh onClick={()=>setIsopen(!isopen)} className='w-10 h-10 mt-2 mr-9 cursor-pointer text-red-700 ' />
    </div> 
    {isopen && <div>
        <ul className="py-3 max-sm:ml-[250px] max-sm:mt-16 ml-[1200px] bg-black absolute z-10 mt-40 rounded   w-28">
            <li className="px-4 py-2 text-white font-bold cursor-pointer hover:underline decoration-white">Profile</li>
            <li className="px-4 py-2pointer text-white font-bold cursor-pointer hover:underline decoration-white">Settings</li>
            <li onClick={handleClick} className="px-4 py-2  text-white font-bold cursor-pointer hover:underline decoration-white ">Logout</li>
          </ul>
        </div>}
     
    </>
  )
}

export default Headerbrowse