import React from "react";
import Button from "../Button";
import girl from "../../image/image-hero-desktop.png";
import small from "../../image/WhatsApp_Image_2022-10-28_at_22.22.59-removebg-preview.png";


const Girl = () => {
  return (
    <div className=" lg:flex md:flex  bg-gradient-to-b from-white  bg-slate-100   md:h-max  ">
      
        <div className="ml-7 mt-16   md:ml-14  md:mt-24 md:h-fit lg:ml-28 lg:mt-32">
          <h1 className="font-extrabold text-4xl  font-sans md:font-extrabold md:text-4xl text-[#050b3f] lg:leading-[71px]  lg:text-[56px]  lg:mt-10  ">
            Maximize skill, minimize budget
          </h1>
          <p className="mt-8  text-lg font-semibold pr-3 w-[375px]  text-gray-400  font-sans md:mt-4  md:font-semibold md:text-[16px]  md:w-[350px] lg:fontbold lg:text-lg lg:w-[400px] ">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <div className=" mt-11 text-lg   md:text-sm md:mr-10 md:mt-6 lg:mt-12 lg:text-2xl">
            <Button text="Get Started" type="secondary" />
          </div>
        </div>
     

      <div className=" overflow-hidden md:overflow-hidden  ">
      <div className= "coffee relative   md:left-[130px] md:mt-20 md:bottom-[100px] lg:left-[230px] lg:bottom-[125px] ">
        <img className="scale-150 hidden lg:block md:block " src={girl} alt=""/>
        </div>
        <div>
        <img className="scale-150 w-72 pt-16  m-auto lg:hidden md:hidden mt-8 " src={small} alt="lady coffee"/>
        </div>
    </div>
    </div>
  );
};

export default Girl;
