import React from "react";

const Button = ({ value, extra }) => {
  return (
    <button
      className={`bg-main-yellow text-black text-[14px]
                 font-bold py-3 px-14 rounded-xl mt-4 hover:opacity-[0.8] transition-all ease-in ${extra}`}
    >
      {value}
    </button>
  );
};

export default Button;
