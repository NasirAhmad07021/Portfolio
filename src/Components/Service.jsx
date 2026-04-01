import React from "react";
import { ServicesInfo } from "../constant";
import Header from "./Common/Header";
import Heading from "./Common/Heading";
import Paragraph from "./Common/paragraph";

const Service = () => {
  return (
    <div id="service" className="service-container space-y-10">
      <Header label={`Services`} />
      <div className="service-cards-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10 dark:text-white p-10">
        {ServicesInfo.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-[#b7b7b776] p-2 dark:bg-[#1d1d1d] rounded-lg space-y-5 shadow-xl dark:shadow-[#232323]"
            >
              <div className="flex flex-col sm:flex-row items-center space-x-5">
                <div className="">
                  <Icon className="text-3xl" />
                </div>
                <Heading label={service.title} classes={`font-bold`} />
              </div>
              <Paragraph
                label={service.desc}
                classes={`text-[#525252] dark:text-[#818181]`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
