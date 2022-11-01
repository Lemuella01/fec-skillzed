import React from "react";

const Card1 = (props) => {
  return (
    <div className="polite lg:ml-5 ">
      <div className="mapscards bg-slate-50  transition-transform ease-in-out duration-300 hover:scale-90 rounded-3xl h-64 lg:h-72 w-[340px] hover:drop-shadow-xl  hover:shadow-blue-900/70  px-12 md:px-10 md:h-72  lg:px-12 ">
        <div className="round bg-gradient-to-b from-orange-400 to-pink-600  w-14 h-14 rounded-full  text-center pt-3 text-3xl  bottom-6 pl-3 text-white relative ">
          {props.round}
        </div>
        <div className="animation">
          <h1 className=" anime text-2xl font-bold md:text-2xl lg:text-2xl ">{props.title}</h1>
        </div>
        <div className="desc  ">
          <p className="desc mt-4 w-72  font-semibold text-gray-400 md:text-[16px] md:mt-8 lg:leading-6 lg:text-lg lg:w-[270px] lg:mt-4 ">
            {props.desc}
          </p>  
        </div>
        <div className="bottom">
          <h3 className="get text-pink-600 font-sans text-xl mt-6  font-bold md:text-xl md:mt-8 lg:mt-8 lg:text-2xl  transition ease-in-out delay-200 hover:text-red-300 ">
            {props.get}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card1;
