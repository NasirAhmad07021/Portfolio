import React from "react";
import { tools } from "../constant";
import Header from "./Common/Header";
import Img from "./Common/Img";
import Heading from "./Common/Heading";
import Paragraph from "./Common/paragraph";

const EssentialTools = () => {
  return (
    <div id="tools" className="EssentialTools-container space-y-5">
      <Header label={`Essential Tools I Use`} />
      <div className="tools-container grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-10">
        {tools.map((tool, index) => {
          return (
            <div
              key={index}
              className="bg-[#b7b7b776] p-2 dark:bg-[#1d1d1d] rounded-lg shadow-xl dark:shadow-[#232323]"
            >
              <Img img={tool.icon} classes={`w-10`} />
              <Heading
                label={tool.name}
                classes={`font-bold dark:text-white`}
              />
              <Paragraph
                label={tool.usage}
                classes={`text-[#0000005e] dark:text-[#e2e2e283]`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EssentialTools;
