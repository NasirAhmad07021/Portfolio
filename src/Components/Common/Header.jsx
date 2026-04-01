import React from "react";

const Header = ({label}) => {
  return (
    <div>
      <div className="line-container relative flex justify-center items-center">
        <div className="w-full h-[3px] bg-[#d2d2d276] dark:bg-[#434343]" />
        <p className="absolute bg-black dark:bg-white text-white dark:text-black p-2 rounded-4xl font-bold -rotate-10">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Header;
