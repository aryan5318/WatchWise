import React from "react";
import Lottie from "react-lottie";
import animationData from "./Animation - 1746393355344.json";  // Path to your Lottie animation

function NewAIIcon() {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true, 
  };

  return (
    <div style={{ width: "60px", height: "60px" }}>
      <Lottie options={options} />
    </div>
  );
}

export default NewAIIcon;
