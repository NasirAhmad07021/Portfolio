import React from "react";
import { Companies_logos } from "../constant/index";

const Companies = () => {
  return (
    <div className="marquee-wrapper">
      <div className="flex justify-between space-x-15 flex-wrap pb-10 px-10 marquee-track">
        {Companies_logos.map((logo, index) => {
          const Icon = logo.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-1 text-2xl md:text-3xl xl:text-4xl text-black dark:text-white"
            >
              <Icon /> <h1>{logo.lable}</h1>
            </div>
          );
        })}
        {Companies_logos.map((logo, index) => {
          const Icon = logo.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-1 text-2xl md:text-3xl xl:text-4xl text-black dark:text-white"
            >
              <Icon /> <h1>{logo.lable}</h1>
            </div>
          );
        })}
        {Companies_logos.map((logo, index) => {
          const Icon = logo.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-1 text-2xl md:text-3xl xl:text-4xl text-black dark:text-white"
            >
              <Icon /> <h1>{logo.lable}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
