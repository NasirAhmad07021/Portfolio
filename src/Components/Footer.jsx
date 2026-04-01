import React from "react";
import Paragraph from "./Common/paragraph";
import Anchor from "./Common/anchor";

const Footer = () => {
  return (
    <div className="footer-container mb-0">
      <div className="line-container relative flex justify-center items-center">
        <div className="w-full h-[3px] bg-[#d2d2d276] dark:bg-[#434343]" />
      </div>
      <div
        id="footer"
        className="flex flex-col md:flex-row justify-center items-center p-10 mb-0 space-y-10 md:space-y-0 md:justify-between dark:text-white"
      >
        <div className="flex space-x-1">
          <span>&copy;</span>
          <Paragraph
            label={`${new Date().getFullYear()} Nasir Ahmad Noori. All rights
            reserved`}
          />
        </div>
        <div className="">
          <ul className="flex flex-wrap space-x-5 font-bold justify-center">
            <li>
              <Anchor
                label={`About`}
                classes={`hover:text-gray-600 dark:hover:text-gray-300`}
                href={`#about`}
              />
            </li>
            <li>
              <Anchor
                label={`Service`}
                classes={`hover:text-gray-600 dark:hover:text-gray-300`}
                href={`#service`}
              />
            </li>
            <li>
              <Anchor
                label={`Tools`}
                classes={`hover:text-gray-600 dark:hover:text-gray-300`}
                href={`#tools`}
              />
            </li>
            <li>
              <Anchor
                label={`Highlights`}
                classes={`hover:text-gray-600 dark:hover:text-gray-300`}
                href={`#highlights`}
              />
            </li>
            <li>
              <Anchor
                label={`Testimonials`}
                classes={`hover:text-gray-600 dark:hover:text-gray-300`}
                href={`#testimonials`}
              />
            </li>
            <li>
              <Anchor
                label={`Contact`}
                classes={`hover:text-gray-600 dark:hover:text-gray-300`}
                href={`#contact`}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
