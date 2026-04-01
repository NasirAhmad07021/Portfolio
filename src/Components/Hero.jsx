import React, { useState } from "react";
import { HeroImage } from "../assets/images";
import { FiTrendingUp } from "react-icons/fi";
import { BiMenu, BiX } from "react-icons/bi";
import { FaCheckDouble, FaDownload, FaLaptopCode } from "react-icons/fa";
import Paragraph from "./Common/paragraph";
import Button from "./Common/Button";
import Anchor from "./Common/anchor";
import Img from "./Common/Img";
import Span from "./Common/Span";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "nasirahmadniazai07021@gmail.com";
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/NASIR-cv.pdf";
    link.download = "NASIR-cv.pdf";
    link.click();
  };
  return (
    <div className="Hero-container bg-[#d2d2d276] dark:bg-[#1d1d1d] shadow-xl dark:shadow-[#232323] p-7 space-y-10 rounded-b-[5rem] md:rounded-b-[10rem]">
      {/* Desktop menu */}
      <div className="Header-container hidden md:flex justify-between items-center">
        <div className="Left-container flex items-center space-x-2">
          <Paragraph
            label={`nasirahmadniazai07021@gmail.com`}
            classes={`text-xs dark:text-white md:text-sm lg:text-lg`}
          />
          <Button
            label={copied ? <FaCheckDouble /> : "Copy"}
            onClick={copyEmail}
            classes={`bg-black py-2  text-white w-[60px] rounded-4xl dark:bg-white dark:text-black md:text-sm flex justify-center ${
              copied ? "font-bold text-4xl" : "font-semibold text-xs"
            } cursor-pointer`}
          />
          <Button
            label={`CV`}
            classes={`bg-black py-2 text-white w-[60px] rounded-4xl dark:bg-white dark:text-black text-xs md:text-sm font-semibold flex items-center justify-between flex-row-reverse p-2 cursor-pointer`}
            icon={<FaDownload />}
            onClick={downloadCV}
          />
        </div>
        <div className="Right-container flex space-x-1 text-sm dark:text-white md:text-sm">
          <Anchor
            label={`LinkedIn`}
            href={`https://www.linkedin.com/in/nasir-ahmad-noori-492a1a383?utm_source=share_via&utm_content=profile&utm_medium=member_android`}
          />{" "}
          <span>/ </span>
          <Anchor
            label={`Dribbble`}
            href={`https://dribbble.com/nasir-ahmad-noori`}
          />{" "}
          <span>/ </span>
          <Anchor
            label={`WhatsApp`}
            href={`https://wa.me/93700329721`}
            target="_blank"
          />
        </div>
      </div>
      {/* Humbergur btn */}
      <div className="humburger-btn md:hidden dark:text-white text-black text-3xl flex justify-between">
        <FaLaptopCode />
        <Button
          label={open ? <BiX /> : <BiMenu />}
          classes={``}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      {/* Mobile menu */}
      <div className={`${open ? "block" : "hidden"}`}>
        <div className="Header-container md:hidden flex flex-col items-center space-y-5">
          <div className="Up-container flex flex-col items-center space-y-4">
            <Paragraph
              label={`nasirahmadniazai07021@gmail.com`}
              classes={`dark:text-white`}
            />
            <Button
              label={copied ? <FaCheckDouble /> : "Copy"}
              classes={`bg-black py-2  text-white w-[60px] rounded-4xl dark:bg-white dark:text-black md:text-sm flex justify-center ${
                copied ? "font-bold text-xl" : "font-semibold textxs"
              } cursor-pointer`}
              onClick={copyEmail}
            />
            <Button
              label={`CV`}
              icon={<FaDownload />}
              classes={`bg-black py-2 text-white w-[60px] rounded-4xl font-semibold dark:bg-white dark:text-black flex items-center flex-row-reverse justify-between p-2 cursor-pointer`}
              onClick={downloadCV}
            />
          </div>
          <div className="Down-container flex space-x-1 dark:text-white">
            <Anchor
              label={`LinkedIn`}
              href={`https://www.linkedin.com/in/nasir-ahmad-noori-492a1a383?utm_source=share_via&utm_content=profile&utm_medium=member_android`}
            />{" "}
            <span>/ </span>
            <Anchor
              label={`Dribbble`}
              href={`https://dribbble.com/nasir-ahmad-noori`}
            />{" "}
            <span>/ </span>
            <Anchor
              label={`WhatsApp`}
              href={`https://wa.me/93700329721`}
              target="_blank"
            />
          </div>
        </div>
      </div>

      <div className="picture-info-container flex flex-col items-center space-y-10">
        <div className="picture-container relative">
          <Img
            img={HeroImage}
            classes={`w-30 h-30 md:w-40 md:h-40 rounded-full border-3 border-white`}
          />
          <Paragraph
            label={`Nasir Ahmad 👋`}
            classes={`absolute dark:bg-white bg-black text-white dark:text-black p-2 rounded-4xl text-sm top-5 md:top-7 -right-18 md:-right-14 -rotate15 font-bold animate-bounce`}
          />
        </div>
        <Paragraph
          label={`Master of MERN stack, React & TypeScript trainer`}
          classes={`text-4xl font-bold text-center bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text dark:from-white dark:to-gray-600`}
        />

        <Button
          label={<Span label="Latest Shots" />}
          icon={<FiTrendingUp />}
          classes={`text-white bg-black dark:bg-white dark:text-black py-4 px-9 rounded-4xl flex items-center space-x-3 mb-10 font-bold shadow-lg hover:shadow-xl shadow-[gray] duration-500`}
        />
      </div>
    </div>
  );
};

export default Hero;
