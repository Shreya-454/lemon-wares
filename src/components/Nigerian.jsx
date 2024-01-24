import React from "react";
import jpnl from "../assets/images/jpnl.webp";
import korane from "../assets/images/Korane.webp";
import nadine from "../assets/images/Nadine.webp";
import leevon from "../assets/images/LeeveOn.webp";
import jrango from "../assets/images/Jrango.webp";
import crypto2 from "../assets/images/Crypto2.webp";
const Nigerian = () => {
  return (
    <div className="md:pb-[106px] sm:pb-20 pb-10">
      <div className="max-w-[1194px] mx-auto px-3">
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="lg:w-1/2 w-full px-3" data-aos="fade-right"   data-aos-easing="linear"
     data-aos-duration="1000">
            <h2 className=" max-w-[700px] lg:max-w-[445px] text-4xl sm:text-5xl text-center lg:text-start mx-auto lg:mx-0 font-inter font-extrabold leading-[133.333%] mb-2">
              We serve over 100 Nigerian Websites
            </h2>
            <p className=" max-w-[600px] text-center lg:text-start mx-auto lg:mx-0 lg:max-w-[445px] font-inter text-lg leading-[177.778% ] font-normal">
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div className="lg:w-1/2 w-full px-3 " >
            <div className="flex flex-wrap flex-row -mx-3">
              <div className="sm:w-1/3 w-1/2 px-3 flex justify-center lg:block items-center" data-aos="fade-down"  data-aos-easing="linear"
     data-aos-duration="1000">
                <img src={jpnl} alt="logo" />
              </div>
              <div className="sm:w-1/3 w-1/2 px-3 flex justify-center lg:block items-center" data-aos="fade-down"  data-aos-easing="linear"
     data-aos-duration="1000">
                <img src={korane} alt="logo" />
              </div>
              <div className="sm:w-1/3 w-1/2 px-3 flex justify-center lg:block items-center" data-aos="fade-down"   data-aos-easing="linear"
     data-aos-duration="1000">
                <img src={nadine} alt="logo" />
              </div>
              <div className="sm:w-1/3 w-1/2 px-3 flex justify-center lg:block items-center" data-aos="fade-up"   data-aos-easing="linear"
     data-aos-duration="1000">
                <img src={leevon} alt="logo" />
              </div>
              <div className="sm:w-1/3 w-1/2 px-3 flex justify-center lg:block items-center" data-aos="fade-up"   data-aos-easing="linear"
     data-aos-duration="1000">
                <img src={jrango} alt="logo" />
              </div>
              <div className="sm:w-1/3 w-1/2 px-3 flex justify-center lg:block items-center" data-aos="fade-up"   data-aos-easing="linear"
     data-aos-duration="1000">
                <img src={crypto2} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nigerian;
