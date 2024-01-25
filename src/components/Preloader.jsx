import React from "react";
import logo from '../assets/images/logo.webp'
const Preloader = () => {
  return (
    <div>
      <div className="bg-white h-screen fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center">
        <img src={logo} alt="logo" className="animate-bounce" />
      </div>
    </div>
  );
};

export default Preloader;