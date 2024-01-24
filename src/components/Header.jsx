import React, { useState } from "react";
import headerimg from "../assets/images/headerimg.webp"
import triangle1 from "../assets/images/triangle1.webp"
import triangle2 from "../assets/images/triangle2.webp"
import triangle3 from "../assets/images/triangle3.webp"

const Herosec = () => {
  const [next, setnext] = useState("tab1");
  function tabchange(tab) {
    setnext(tab);
  }
  return (
    <div className="lg:py-20 md:py-16 sm:py-10 py-8 overflow-x-clip">
      <div className="container max-w-[1138px] px-3 mx-auto ">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/2 w-full px-3">
            <div className="flex relative justify-center after:absolute max-w-[248px] lg:text-start text-center max-lg:mx-auto max-lg:after:left-[14px] max-lg:after:right-[-8px]  after:left-[20px] after:bottom-[-3px] after:right-[-23px] after:bg-[#D6D4D4E0] after:h-[2px]">
              <p
                onClick={() => tabchange("tab1")}
                className={`${
                  next === "tab1"
                    ? "after:w-[70%] text-[#B00000]"
                    : "text-[#D6D4D4E0]"
                } cursor-pointer  relative after:absolute z-10 after:left-[-4px] after:mx-auto after:right-0 after:bottom-[-3px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 ml-6 after:w-0  font-poppins text-[15px] font-semibold leading-normal`}
              >
                Hosting
              </p>
              <p
                onClick={() => tabchange("tab2")}
                className={`${
                  next === "tab2"
                    ? "after:w-[70%] text-[#B00000]"
                    : "text-[#D6D4D4E0]"
                } cursor-pointer relative after:absolute z-10 after:left-[-3px] after:mx-auto after:right-[-3px] after:bottom-[-3px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 ml-6 after:w-0  font-poppins text-[15px] font-semibold leading-normal`}
              >
                Domain
              </p>
              <p
                onClick={() => tabchange("tab3")}
                className={`${
                  next === "tab3"
                    ? "after:w-[70%] text-[#B00000]"
                    : "text-[#D6D4D4E0]"
                } cursor-pointer relative after:absolute z-10 after:left-[-3px] after:mx-auto after:right-[-3px] after:bottom-[-3px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 ml-5  font-poppins text-[15px] font-semibold leading-normal`}
              >
                SEO
              </p>
              <p
                onClick={() => tabchange("tab4")}
                className={`${
                  next === "tab4"
                    ? "after:w-[70%] text-[#B00000]"
                    : "text-[#D6D4D4E0]"
                }  cursor-pointer relative after:absolute z-10 after:left-0 after:mx-auto after:right-0 after:bottom-[-3px] after:bg-[#B00000] after:h-[2px] after:rounded-[10px] after:transition-all after:ease-linear after:duration-400 after:w-0 ml-4  font-poppins text-[15px] font-semibold leading-normal`}
              >
                Email
              </p>
            </div>
            <div className="md:pt-[26px] sm:pt-5 pt-4">
                  {next === "tab1" && (
                                  <h1 className="text-[#2E2E2E] xl:text-[64px] lg:text-6xl md:text-[52px] sm:text-5xl text-4xl font-poppins font-bold leading-[121.094%] lg:text-start text-center mx-auto">
                      Premium Web Hosting for Your Website
                    </h1>
                  )}
              {next === "tab2" && (
                <h1 className="text-[#2E2E2E] xl:text-[64px] lg:text-6xl md:text-[52px] sm:text-5xl text-4xl font-poppins font-bold lg:text-start text-center mx-auto leading-[121.094%]">
                  Premium Web Domain for Your Website
                </h1>
              )}
              {next === "tab3" && (
                <h1 className="text-[#2E2E2E]  xl:text-[64px] lg:text-6xl md:text-[52px] sm:text-5xl text-4xl font-poppins font-bold lg:text-start text-center mx-auto leading-[121.094%]">
                  Premium Web SEO for Your Website
                </h1>
              )}
              {next === "tab4" && (
                <h1 className="text-[#2E2E2E] xl:text-[64px] lg:text-6xl md:text-[52px] sm:text-5xl text-4xl font-poppins font-bold lg:text-start text-center mx-auto leading-[121.094%]">
                  Premium Web Email for Your Website
                </h1>
              )}
                      </div>
                      
            <div className="flex lg:justify-start justify-center ">
                <p className="text-[#808080] lg:pt-8 md:pt-6 lg:text-start text-center sm:pt-3 pt-2 max-w-[448px] font-inter text-sm sm:text-base font-normal leading-[175%] tracking-[0.8px]">
                  Blazing fast web hosting for individuals and businesses of all
                  sizes backed by 24x7x365 Support.
                          </p>
            </div>
                      <div className=" lg:pt-[60px] md:pt-14 sm:pt-6 pt-3 flex  gap-6 lg:justify-start justify-center">
                      <button class="relative sm:pb-3 sm:pt-2 pb-2 pt-1 sm:px-[18px] px-2.5 group rounded-[8px] overflow-hidden  bg-[#B00000] text-white shadow-[0px_0px_64px_0px_#B000004D] hover:shadow-black hover:shadow-2xl
 transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-black before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:-full after:bg-black after:duration-500 hover:text-white hover:before:h-2/4 hover:after:h-2/4">
          <span class="relative z-10  text-white font-poppins group-hover:text-white duration-500    sm:text-sm text-xs font-normal leading-[171.429%]">Create an Account</span>
        </button>

                          <button class="relative sm:pb-3 sm:pt-2 pb-2 pt-1 sm:px-[18px] px-2.5 group rounded-[8px] overflow-hidden border border-black bg-white text-black shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-black before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:-full after:bg-black after:duration-500 hover:text-white hover:shadow-black hover:before:h-2/4 hover:after:h-2/4">
          <span class="relative z-10  text-black font-poppins group-hover:text-white duration-500    sm:text-sm text-xs font-normal leading-[171.429%]">Choose your plan</span>
        </button>
                      </div>
          </div>
                  <div className="lg:w-1/2 w-full px-3 flex lg:justify-end justify-center lg:pt-0 pt-4 xl:translate-x-14">
                      <div className="relative">
                          <img src={headerimg} alt="headerimg" />
                          <img src={triangle1} alt="1" className="absolute bottom-[45%] left-[-6%]" />
                          <img src={triangle2} alt="1" className="absolute top-[15%] right-[-4%]" />
                          <img src={triangle3} alt="1" className="absolute bottom-[15%] right-[-5%]" />
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;