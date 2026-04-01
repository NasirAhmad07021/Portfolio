import React from "react";
import { myImage } from "../assets/images";
import Header from "./Common/Header";
import Paragraph from "./Common/paragraph";
import Heading from "./Common/Heading";
import Img from "./Common/Img";

const About = () => {
  return (
    <div id="about" className="about-container space-y-10">
      <Header label={`About`} />
      <div className="photo-info-container dark:text-white grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-10 place-items-center p-10">
        <div className="info-container lg:leading-8">
          <Paragraph
            label={`Hi, I’m Nasir Ahmad — a
            passionate Front-End Developer who loves turning ideas into
            responsive, modern, and beautiful web experiences. For me, coding is
            not just a skill, it’s a way to create, express, and solve
            real-world problems.`}
          />
          <Paragraph
            label={`I believe in continuous learning, improving every day, and pushing
            myself to build better and smarter solutions. My goal is to become a
            highly skilled full-stack developer and work on impactful projects
            that make people’s lives easier.`}
          />
          <Heading
            label={`Crafting elegant interfaces, building powerful user experiences, and
            improving a little every single day — that’s who I am.`}
            classes={`font-extrabold`}
          />
        </div>
        <div className="photo-container">
          <Img
            img={myImage}
            classes={`rounded-[3rem] shadow-xl dark:shadow-[#232323]`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
