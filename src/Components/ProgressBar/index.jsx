import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="w-[120px] h-auto overflow-hidden rounded-md bg-[#f1f1f1] ">
      <span
        className={`flex items-center w-[${props.value}%] h-[8px] ${
          props.type === "success" && "bg-green-600"
        } ${props.type === "error" && "bg-pink-600"}
        ${props.type === "warning" && "bg-yellow-400"}

        `}
      ></span>
    </div>
  );
};

export default ProgressBar;
