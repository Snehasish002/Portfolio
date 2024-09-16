import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between items-center p-6 md:p-20 text-xs md:text-lg mt-6 md:mt-12 bg-slate-600/10 rounded-lg">
      <div className="flex flex-col space-y-1 md:space-y-4">
        <h3 className="text-lg md:text-2xl text-gray-200 font-semibold">
          <a href="#" className="font-mono">
            <span className="text-purple-800 text-lg md:text-2xl">&lt;</span>
            Snehasish
            <span className="text-purple-800 text-lg md:text-2xl">/&gt;</span>
          </a>
        </h3>
        <div className="flex flex-row gap-3 md:gap-6 text-xl md:text-4xl text-gray-300 pl-3">
          <a href="https://github.com/Snehasish002">
            <FaGithub className="text-xl md:text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/contactsnehasish">
            <FaLinkedin className="text-xl md:text-4xl" />
          </a>
          <a href="#">
            <FaInstagram className="text-xl md:text-4xl" />
          </a>
        </div>
      </div>
      <p className="text-gray-400 text-xs md:text-sm">© snehasish-2024</p>
    </div>
  );
};

export default Footer;
