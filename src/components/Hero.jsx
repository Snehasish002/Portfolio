import React from "react";
import profile from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import shinyEffect from "./shinyEffect";
import './Social.css'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiExtjs,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend developer",
              1000,
              // "Video Editor",
              // 1000
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hey, I am <br />
            <span className="text-purple-600">Snehasish</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate fullstack developer with over 5 years of
            experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
            id="social-contact"
          >
            <a href="mailto:snehasishmohanty9439@gmail.com">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-600 rounded-xl hover:bg-purple-600 transition duration-300"
              >
                Say Hello
              </motion.button>
            </a>

            <div className="flex gap-6 flex-row text-4xl md:text-4xl text-gray-500 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Snehasish002"
                className="hover:text-gray-200 transition duration-500"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/contactsnehasish/"
                className="hover:text-sky-500 transition duration-300"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profile}
          className="w-[300px] md:w-[400px] rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 text-3.5xl mb-6 md:mb-0 md:mr-6">
          My Tech Stack
        </p>
        <div className="flex flex-row justify-center items-center space-x-2 md:space-x-4 ">
          <DiHtml5 className="text-orange-600 text-4xl md:text-7xl" />
          <DiCss3 className="text-blue-600 text-4xl md:text-7xl" />
          <DiJavascript1 className="text-yellow-500 text-4xl md:text-7xl" />
          <DiReact className="text-blue-500 text-4xl md:text-7xl" />
          <DiNodejsSmall className="text-green-500 text-4xl md:text-7xl" />
          <SiExpress className="text-gray-100 text-4xl md:text-7xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
