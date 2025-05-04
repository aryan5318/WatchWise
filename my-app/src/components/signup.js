import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
import { Handlevalidation1 } from "../utils/validate";
import { useNavigate } from "react-router-dom";

const Signup = ({ email, setEmail }) => {
  const emailRef = useRef(null);
  const [error, setError] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const emailValue = emailRef.current.value.trim();
    if (!emailValue) return; // Prevent empty input

    setEmail(emailValue); // ✅ Set email state
    console.log("Email Entered:", emailValue);

    const validationResult = Handlevalidation1(emailValue);
    setError(validationResult);
    console.log("Validation Result:", validationResult);

    if (validationResult === null) {
      setIsEmailValid(true); // ✅ Set email validity
    }
  };

  // ✅ Use `useEffect` to wait for `email` and `isEmailValid` to update
  useEffect(() => {
    console.log("Inside useEffect: isEmailValid =", isEmailValid, "email =", email);
    if (isEmailValid ) {
      console.log("Navigating to /next...");
      navigate("/next");
    }
  }, [ isEmailValid, navigate]); // ✅ Dependencies

  return (
    <>
      <Header />
      <div className="absolute inset-0 w-full h-full object-cover flex items-center justify-center">
        <div className="absolute z-10 flex flex-col items-center justify-center">
          <h1 className="text-white font-extrabold text-6xl mb-4">
            Unlimited movies, TV
          </h1>
          <h1 className="text-white font-extrabold text-6xl mb-4">
            shows and more
          </h1>
          <p className="text-white mb-4 text-xs">
            Ready to watch? Enter your email to create your account
          </p>
          <p className="text-red-700 mb-3 text-xs font-semibold">{error}</p>
          <div>
            <input
              ref={emailRef}
              className="mb-5 h-12 w-80 text-white p-4 bg-black/70 border rounded border-white mr-2"
              type="text"
              placeholder="Email"
            />
            <button
              onClick={handleButtonClick}
              className="bg-purple-800 text-white rounded w-48 font-bold h-12"
            >
              Get Started
            </button>
          </div>
        </div>

        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
          alt="background"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
    </>
  );
};

export default Signup;
