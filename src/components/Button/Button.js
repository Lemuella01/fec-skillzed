import React from "react";

const Button = ({ text, type = "primary", size = "medium" }) => {
  let color = "text-white";
  let backgroundColor = "";
  let hoverBackgroundColor = "";
  let buttonSize = "";
  let textSize = " ";

  switch (type) {
    case "secondary":
      backgroundColor = "bg-gradient-to-b from-orange-400 to-pink-600";
      // backgroundColor = "bg-purple-600";
      hoverBackgroundColor = "hover:from-pink-600 hover:to-blue-700";
      textSize = "font-bold";
      break;
    case "tertiary":
      backgroundColor = "bg-gradient-to-b from-purple-500 to-pink-700";
      hoverBackgroundColor =
        " hover:from-transparent-200 hover:to-slate-200 hover:text-black ";
      textSize = "font-bold";
      break;
    default:
      backgroundColor = "bg-[#04032e]";
      hoverBackgroundColor = " hover:bg-purple-700 ";
      textSize = "font-bold";
  }

  switch (size) {
    case "medium":
      buttonSize = "p-9 py-3";
      break;
    case "large":
      buttonSize = "px-11 py-4";
      break;
    default:
      buttonSize = "px-10    py-4";
  }

  return (
    <button
      className={`${color} ${backgroundColor} ${hoverBackgroundColor} ${buttonSize} ${textSize} rounded-[70px] `}
    >
      {text}
    </button>
  );
};

export default Button;
