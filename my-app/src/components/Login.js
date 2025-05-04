import Header from "./Header";
import { Link, Navigate } from "react-router-dom";
import { useRef,useState} from "react";
import { Handlevalidation } from "../utils/validate";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";

const Login = () => {
 
   const [errorMessage,setErrorMessage]=useState(null)
   
    const email=useRef(null)
    const password=useRef(null)
    const handleButtonClick =()=>{
      const result = Handlevalidation(email.current.value,password.current.value)
      setErrorMessage(result)
      if(result===null){
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode +errorMessage)
  });
      }
      
    }
    
  return (
    <>
      <Header />
      <div className="absolute h-screen w-full flex items-center justify-center ">
      <form  onSubmit={(e)=>e.preventDefault()} className="absolute z-10 flex flex-col bg-black/70 p-14 mt-44 w-[440px]">
        <h1 className="text-white font-bold text-4xl mb-5 ">Sign In</h1>
        <input ref={email} className="mb-5 h-10 text-white p-4 bg-black/70 border-[0.1px] border-white rounded" type="text" placeholder="Email"   />
        <input ref={password} className="mb-5 h-10 text-white p-4 bg-black/70 border rounded border-white" type="password" placeholder="Password" />
        <p className=" text-red-700 mb-3 text-xs font-semibold">{errorMessage}</p>
        <button type='submit' onClick={handleButtonClick} className="bg-purple-800 text-white h-10 rounded">Sign In</button>
        <h2 className="text-white mb-2 mt-2 ml-36 ">OR</h2>
        <button className="bg-gray-400/30 text-white  mb-4 h-10 rounded">Use a sign-in code</button>
        <a className="text-white ml-20 mb-3">Forgot password?</a>
        <div className="mb-2"><input className="text-white" type="checkbox"/> <span className="text-white">Remember me</span>
        </div>
        <p className="text-white mb-5">New to Netflix?<span className="hover:underline"><Link to='/signup'>Sign up now.</Link>  </span> </p>
        <p className="text-white mb-5 text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
      </div>
      <div className="relative h-screen  w-full">
    
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
          alt="background"
        />
          <div className="absolute h-screen  w-full bg-black/50"></div>
       
      </div>
   
    </>
  );
};

export default Login;
