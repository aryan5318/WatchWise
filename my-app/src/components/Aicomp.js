import React from "react";
import Lottie from "react-lottie";
import animationData from "./Animation - 1746388301790.json";  // Path to your Lottie animation
import Animate from "./Animation - 1746393355344.json"
function AIIcon() {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true, 
  };

  return (
    <div style={{ width: "150px", height: "150px", marginLeft:"-600px",  marginTop:"-20px",position:"absolute" }}>
      <Lottie options={options} />
    </div>
  );
}
function AiIcon() {
    const options = {
      animationData:Animate,
      loop: true,
      autoplay: true, 
    };
  
    return (
      <div style={{ width: "150px", height: "150px", marginLeft:"-600px",  marginTop:"-20px",position:"absolute" }}>
        <Lottie options={options} />
      </div>
    );
  }
export default AIIcon;
