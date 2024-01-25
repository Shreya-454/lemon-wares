import React, { useState } from "react";
import logo from "../assets/images/logo.webp";

const Mynav = () => {
     const [show, setshow] = useState(true);
  function nav() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden")
    }
    else {
      document.body.classList.remove("max-lg:overflow-hidden")
    }
  }
  return (
    <div className="!sticky !top-0 z-50 bg-white">
      <div className="md:pt-10 sm:pt-8 pt-6">
        <div className=" max-w-[1215px] px-3 mx-auto">
          <div className="max-w-[1138px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-32">
                <ul className="gap-16 flex items-center">
                  <li>
                    <a href="">
                      <img src={logo} alt="logo" />
                    </a>
                  </li>
                  <li onClick={nav} className="lg:block hidden  relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[70%] ">
                    <a href="#" className="text-black text-center font-poppins font-semibold leading-normal text-[15px]  ">Our Services</a>
                  </li>
                </ul>
                <ul    className={`gap-8 flex mobileView items-center duration-700 ${
                  show ? "right-[-100%]" : "right-0"
                              }`}>
                                <li onClick={nav} className=" lg:hidden block  relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[70%]">
                    <a href="#head" className="text-black text-center font-poppins font-semibold leading-normal text-[15px] ">Our Services</a>
                  </li>
                  <li onClick={nav} className=" relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[70%]">
                    <a href="#about" className="text-black text-center font-poppins font-semibold leading-normal text-[15px] ">About</a>
                  </li>
                  <li onClick={nav} className=" relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[70%]">
                    <a href="#blogs" className="text-black text-center font-poppins font-semibold leading-normal text-[15px] ">Blog&News</a>
                  </li>
                  <li onClick={nav} className="s relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[70%]">
                    <a href="#contact" className="text-black text-center font-poppins font-semibold leading-normal text-[15px] ">Contact</a>
                              </li>
                               <li onClick={nav} className="md:hidden block relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[70%]">
                   <a href="#account" className="text-black text-center font-poppins font-semibold leading-normal text-[15px] ">Account</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex gap-8 ">
                  <li className=" md:block hidden  relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[70%]">
                    <a href="#account" className="text-black text-center font-poppins font-semibold leading-normal text-[15px] ">Account</a>
                  </li>
                  <li className="text-[#DAD8D8] max-md:hidden">|</li>
                  <li >
                    <a href="tel:+2349067322844" className="text-black flex items-center text-center font-poppins relative after:absolute after:left-0 after:mx-auto after:right-0 after:bottom-[-4px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 hover:after:w-[70%] sm:text-[15px] text-xs font-semibold leading-normal">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1171_470)">
                            <path
                              d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z"
                              stroke="#B00000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1171_470">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      +2349067322844
                    </a>
                  </li>
                </ul>
                      </div>
                        <label className=" lg:hidden" onClick={nav}>
                {show ? (
                  <div className="z-20 relative">
                    <span className="flex bg-[#710101] h-[3px] rounded-3xl duration-300 w-6"></span>
                    <span className="flex bg-[#710101] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                    <span className="flex bg-[#710101] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                  </div>
                ) : (
                  <div className="z-20 relative">
                    <span className="flex bg-[#710101] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                    <span className="flex bg-[#710101] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mynav;