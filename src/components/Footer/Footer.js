import React from "react";
import Button from "../Button";

const Footer = () => {
  return (
    <footer className="flex justify-between pt-8 bg-[#04032e] md:px-5  md:h-46   lg:px-24">
      <div className="text-white font-semibold text-2xl mt-2  md:text-3xl ml-10  lg:text-4xl lg:font-bold  ">
        <h2>SKILLED</h2>
      </div>
      <div className=" mr-6 text-[14px] w-34 mb-10 md:mr-10  md:text-sm lg:text-xl font-semibold transition ease-in-out delay-300   ">
        <Button text="Get Started" type="tertiary" size="large" />
      </div>
    </footer>
  );
};

export default Footer;
