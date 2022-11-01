import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <nav className="ml-7 flex justify-between m-8  h-11 md:ml-14 lg:px-10  ">
      <div className="div">
        <h1 className="pt-1 text-3xl   text-[#040d5f] font-extrabold md:text-4xl lg:text-5xl">
       
          <Link to="/">Skilled</Link>
        </h1>
      </div>
      <div className=" text-[16px]   w-38 md:text-sm  md:pl-20 md:w-72 lg:w-72 lg:text-2xl  lg:mr-8 ">
        
        <Link to="/">
          <Button className="rounded-3xl " text="Get Started" />
        </Link>
      </div>
    </nav>
  );
};

export default Top;
