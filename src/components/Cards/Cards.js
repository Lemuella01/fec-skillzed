import React from "react";
import Data from "./cardData";

import Card1 from "./Card1";

const lemy = (item) => {
  return (
    <Card1
      round={item.round}
      title={item.title}
      desc={item.desc}
      get={item.get}
      key={item.id}
    />
  );
};

const Cards = () => {
  return (
    <div className="">
      <div className="cards   bg-slate-100  gap-y-10 px-10 pb-16  grid  md:grid-cols-2  md:gap-x-5 md:gap-y-10 md:px-10 md:h-full md:pt-14 md:pb-16 lg:grid-cols-3 pt-32  lg:gap-x-3 lg:gap-y-14 lg:px-24 lg:h-full  lg:pb-16 ">
        
        <div className="card1 font-bold rounded-3xl font-sans transition-transform ease-in-out duration-300 hover:scale-90 hover:drop-shadow-xl bg-gradient-to-b from-orange-400 to-pink-600 text-3xl h-64 w-[340px] md:h-72 md:text-2xl  lg:ml-2 lg:h-72  ">
          <h1 className=" text-slate-200 m-14 mt-20 leading-11 md:mt-16 md:text-2xl lg:text-3xl  lg:mt-11 ">
            Check out our most porpular courses!
          </h1>
        </div>

        {Data.map(lemy)}
      </div>
    </div>
  );
};

export default Cards;
