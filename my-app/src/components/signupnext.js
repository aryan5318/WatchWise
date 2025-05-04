import React from 'react'
import Header from './Header'
import { useRef,useState } from 'react'
import { Handlevalidation2 } from '../utils/validate'
import Signup from './signup'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'

import { updateProfile } from 'firebase/auth'
import {useDispatch} from "react-redux"
import { addUser } from '../utils/userslice'
const Signupnext = ({ email,setEmail }) => {
  
  const dispatch=useDispatch()
  const password=useRef(null)
  const name=useRef(null)
   
  const [error,seterror]=useState(null)
 const handleButtonClick=()=>{
  console.log(email)
   const result=Handlevalidation2(password.current.value)
   seterror(result)
   if(result===null){
   
  createUserWithEmailAndPassword(auth, email, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    updateProfile(auth.currentUser, {
      displayName: name.current.value,
    }).then(() => {
        const{uid,email,displayName}=user
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    }).catch((error) => {
      // An error occurred
      // ...
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode +errorMessage)
    // ..
  });

   }
  
 }
  return (
    <div>

    <Header/>
    
    <div className=' absolute inset-0 z-10  flex  items-center justify-center'>
    <div className=' flex flex-col z-10 w-[400px] h-[400px] '>
       <h1 className='text-3xl text-white font-semibold mb-3'>Enter your name and create a password to start</h1>
       <p className='text-xl text-white font-semibold mb-3'>Just a few more steps and you're done!
       We hate paperwork, too.
       </p> 
       <input ref={name}className="mb-5 h-10 text-black p-4 border rounded border-black " type="text" placeholder="Enter Your FullName" />
       <input ref={password} className="mb-5 h-10 text-black p-4 border rounded border-black " type="password" placeholder="Password" />
       <p className=" text-red-700 mb-3 text-xs font-semibold">{error}</p>
       <button type='submit'  onClick={handleButtonClick} className="bg-purple-800 text-white h-10 rounded ">Sign In</button>
    </div>
    </div>
    <div className="relative h-screen  w-full">
    
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
          alt="background"
        />
          <div className="absolute h-screen  w-full bg-black/50"></div>
       
      </div>
   
   
    </div>
  )
}

export default Signupnext