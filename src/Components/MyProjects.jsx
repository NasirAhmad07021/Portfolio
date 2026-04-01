import React, { Component } from "react";
import { projects_info } from "../constant";
import Header from "./Common/Header";
import Paragraph from "./Common/paragraph";
import Img from "./Common/Img";
import Heading from "./Common/Heading";
import Anchor from "./Common/anchor";
import Button from "./Common/Button";

export default class MyProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: "all",
    };
  }
  handleFilter = (type) => {
    this.setState({ filterType: type });
  };
  render() {
    const { darkMode } = this.props;
    const { filterType } = this.state;

    const filteredProjects =
      filterType === "all"
        ? projects_info
        : projects_info.filter((project) => project.type === filterType);

    const btnClass = (type) =>
      `px-4 py-2 rounded-lg shadow-xl duration-300 font-semibold text-xs md:text-sm hover:cursor-pointer ${
        filterType === type
          ? "bg-[black] dark:bg-[white] text-white dark:text-black shadow-[gray] dark:shadow-gray-300/30"
          : "bg-[gray] text-white dark:bg-[gray] dark:text-black"
      }`;

    return (
      <div id="highlights" className="MyProjects-container space-y-10">
        <Header label={`My Wrok Highlights`} />
        <div className="projects-container dark:text-white space-y-10 p-10">
          <Paragraph
            label={`Projects that reflect my expertise in building modern, interactive and
          user-friendly web applications.`}
            classes={`text-center md:text-lg font-semibold xl:text-xl`}
          />
          <div className="flex justify-center space-x-10">
            <Button
              label={`All Projects`}
              classes={btnClass("all")}
              onClick={() => this.handleFilter("all")}
              aria-pressed={filterType === "all"}
            />
            <Button
              label={`Website Projects`}
              classes={btnClass("website")}
              onClick={() => this.handleFilter("website")}
              aria-pressed={filterType === "website"}
            />
            <Button
              label={`Mini Projects`}
              classes={btnClass("mini")}
              onClick={() => this.handleFilter("mini")}
              aria-pressed={filterType === "mini"}
            />
          </div>
          <div className="projects-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5 lg:gap-10 place-items-center">
            {filteredProjects.map((info, index) => {
              return (
                <div
                  key={index}
                  className="group bg-[#b7b7b776] p-5 dark:bg-[#1d1d1d] rounded-t-[21px] space-y-10 flex flex-col items-center shadow-xl dark:shadow-[#232323] overflow-hidden"
                >
                  <div className="">
                    <Img
                      img={darkMode ? info.lightimage : info.darkimage}
                      classes={`w-70 lg:max-w-full h-[160px] rounded-t-[13px] group-hover:scale-125 md:group-hover:scale-y-130 duration-500`}
                    />
                  </div>
                  <div className="space-y-5">
                    <Heading label={info.title} classes={`font-bold text-lg`} />
                    <Paragraph
                      label={info.desc}
                      classes={`text-sm text-[#1d1d1d] dark:text-[#b7b7b776] font-semibold`}
                    />
                    <div className="p-3 pl-0">
                      <Anchor
                        label={`View it`}
                        classes={`bg-black text-white p-3 rounded-lg hover:shadow-[gray] shadow-md hover:shadow-lg duration-500 text-md font-semibold dark:bg-white dark:text-black cursor-pointer`}
                        href={info.link}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
