import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-100 text-xl items-center px-12 h-20">
        <a href="#" className="font-mono">
          <span className="text-purple-800">&lt;</span>Snehasish
          <span className="text-purple-800">/&gt;</span>
        </a>
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer ">
          <li className="text-pink-500 hover:text-white">
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li className="text-pink-500 hover:text-white">
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li className="text-pink-500 hover:text-white">
            <Link to="hero" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <a className="blog" href="https://blog-app-cl3f.onrender.com">
              Blog
            </a>
          </li>
        </ul>
        <div
          onClick={toggleNav}
          className="md:hidden z-50 text-gray-200 cursor-pointer"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 bg-opacity-95 z-40 backdrop-blur-md"
        >
          <ul className="font-semibold text-2xl space-y-8 mt-24 text-center cursor-pointer">
            <li>
              <Link
                onClick={closeNav}
                to="skills"
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={closeNav}
                to="portfolio"
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={closeNav}
                to="hero"
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                onClick={closeNav}
                to="experience"
                smooth={true}
                offset={50}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li>
              <a

                className="blog2"
                onClick={closeNav}
                href="https://blog-app-cl3f.onrender.com"
              >
                Blog
              </a>
            </li>
          </ul>
          <hr className="w-1/2 mx-auto my-10 border-gray-300 opacity-50"/>
          <div className="flex flex-row gap-3 md:gap-6 text-xl md:text-4xl text-gray-300 pl-3 justify-center ">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
