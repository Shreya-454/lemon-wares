import React from "react";
import cpanel from "../assets/images/cPanel.webp";
import imunify from "../assets/images/imunify.webp";
import litespeed from "../assets/images/litespeed.webp";
import soft from "../assets/images/softaculous.webp";
import wordpress from "../assets/images/wordpress.webp";
import cloudflare from "../assets/images/cloudflare.webp";
const Hosting = () => {
  return (
    <div className="pt-[79px]">
      <div className="max-w-[1284px] mx-auto px-3">
        <div className="flex flex-wrap fle-row -mx-3">
          <div className="lg:w-1/2 w-full px-3">
            <h2 className=" font-inter text-4xl sm:text-5xl font-extrabold text-[#18191F] leading-[133.333%] text-center mx-auto lg:text-start lg:mx-0">
              True Cloud Web Hosting
            </h2>
            <p className=" font-inter text-base sm:text-lg font-normal leading-[177.778%] pt-4 max-w-[573px] text-[#18191F] text-center mx-auto lg:text-start lg:mx-0">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div className="lg:w-1/2 w-full px-3">
            <div className="flex flex-wrap flex-row -mx-3">
              <div className="w-1/3 pt-[25px] pb-[9px] lg:mb-[50px] px-3 flex justify-center lg:block items-center">
                <img src={cpanel} alt="img1" />
              </div>
              <div className="w-1/3 pt-[22px] px-3 lg:px-0 flex justify-center lg:block items-center">
                <img src={imunify} alt="img1" />
              </div>
              <div className="w-1/3 pt-[18px] px-3 lg:px-0 flex justify-center lg:block items-center">
                <img src={litespeed} alt="img1" />
              </div>
              <div className="w-1/3 py-5 px-3 lg:px-0 flex justify-center lg:block items-center">
                <img src={soft} alt="img1" />
              </div>
              <div className="w-1/3 py-5 px-3 lg:px-0 flex justify-center lg:block items-center">
                <img src={wordpress} alt="img1" />
              </div>
              <div className="w-1/3 py-2 px-3 lg:px-0 flex justify-center lg:block items-center">
                <img src={cloudflare} alt="img1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
