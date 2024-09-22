import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Likes from "./Like";
import Reavel from "./Reavel";
import "./Portfolio.css";
import {asserts} from "../assets/assest"

const projects = [
  {
    img: project1,
    title: "Food delivery",
    description:
      "A full-stack food delivery application where users can browse menus, place orders, and track their delivery status.",
    date: "Aug - Sept 2024",
    stack: [
      {name: "ReactJs", icon: asserts.reactStack },
      {name: "NodeJs", icon: asserts.nodeStack },
      {name:"ExpressJs", icon: asserts.expressStack},
      {name:"MongoDB", icon: asserts.mongoddStack},
      {name:"HTML", icon: asserts.htmlStack},
      {name:"CSS", icon: asserts.cssStack},
      {name:"Jwt", icon:asserts.jwtStack},
      {name:"Stripe", icon:asserts.stripeStack},
      
    ],
    like: <Likes />,
    links: {
      site: "https://food-delivery-frontend-g6ya.onrender.com",
      github: "https://github.com/Snehasish002/Food-delivery",
    },
  },
  {
    img: project4,
    title: "Blog App",
    description:
      "I developed a blog app using the MERN stack with JWT authentication, allowing users to register, log in, create posts, and edit them.",
    date: "Sept - 2024",
    stack: [
      { name: "ReactJs", icon: asserts.reactStack },
      { name: "NodeJs", icon: asserts.nodeStack},
      { name: "ExpressJs", icon: asserts.expressStack },
      { name: "MongoDB", icon: asserts.mongoddStack},
      { name: "HTML", icon: asserts.htmlStack },
      { name: "CSS" , icon: asserts.cssStack},
      { name: "Jwt" , icon: asserts.jwtStack},
    ],
    like: <Likes />,
    links: {
      site: "https://blog-app-cl3f.onrender.com",
      github: "https://github.com/Snehasish002/Blog-App",
    },
  },
  {
    img: project5,
    title: "Google Gemini",
    description:
      "I built a Google Gemini project using the Google Gemini API with React and Node.js. This project demonstrates my expertise in integrating APIs and developing seamless, responsive applications.",
    date: "Sept - 2024",
    stack: [
      
      { name: "HTML", icon: asserts.htmlStack },
      { name: "CSS" , icon: asserts.cssStack},
      { name: "javaScript" , icon: asserts.jsStack},
      { name: "ReactJs", icon: asserts.reactStack},
      { name: "NodeJs", icon: asserts.nodeStack},
      { name: "Gemini API", icon: asserts.apiStack},
      
    ],
    like: <Likes />,
    links: {
      site: "https://google-gemini-cwl9.onrender.com",
      github: "https://github.com/Snehasish002/Google-Gemini",
    },
  },
  {
    img: project2,
    title: "Image Search App",
    description:
      "A responsive web application that allows users to search for images using the Unsplash API. The app dynamically displays search results with image previews and links to the source, offering a seamless user experience.",
    date: "Aug - 2024",
    stack: [
      { name: "HTML", icon: asserts.htmlStack },
      { name: "CSS" , icon: asserts.cssStack},
      { name: "javaScript" , icon: asserts.jsStack},
      { name: "NodeJs", icon: asserts.nodeStack},
      { name: "Unsplash API", icon: asserts.apiStack},
    ],
    like: <Likes />,
    links: {
      site: "https://snehasish-img-search.onrender.com",
      github: "https://github.com/Snehasish002/Image-Search-App--API-",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-full mx-auto p-6 md:my-20 space-y-12" id="portfolio">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 md:mb-8">
        Projects
      </h2>

      {projects.map((project, index) => (
        <Reavel key={index}>
          <div className="border border-purple-600/15 p-6 sm:p-8 md:p-4 rounded-lg shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800/20 w-full">
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } mb-8 md:mb-12`}
            >
              <div className="w-full md:w-1/2 p-2 md:p-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-2 md:p-4 flex flex-col justify-center">
                <h3
                  id="title"
                  className="text-xl md:text-2xl font-semibold text-gray-200 mb-3 md:mb-4"
                >
                  {project.title}
                </h3>
                <p id="date" className="text-gray-500 mb-2">
                  {project.date}
                </p>
                <p id="description" className="text-gray-300 mb-3 md:mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 text-xs sm:text-sm md:text-base mb-4 py-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center text-gray-200 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded m-1"
                      id="stack"
                    >
                      <img
                        src={tech.icon}
                        // alt={tech.name}
                        className="w-4 h-4 mr-2"
                      />{" "}
                      {/* Adjust size as needed */}
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center space-x-2 md:space-x-6 pt-2 md:pt-4">
                  <a
                    href={project.links.site}
                    className="px-2 py-1 text-sm bg-slate-800 text-gray-200 rounded-lg hover:bg-slate-700
               transition duration-300 md:px-4 md:py-2 md:text-base"
                    id="view-site"
                  >
                    View Site
                  </a>
                  <a
                    href={project.links.github}
                    className="px-2 py-1 text-lg bg-slate-800 text-gray-200 rounded-lg hover:bg-slate-700
               transition duration-300 md:px-4 md:py-2 md:text-2xl"
                  >
                    <AiFillGithub />
                  </a>
                  <div
                    className="px-2 py-1 text-base bg-slate-800 rounded-lg hover:bg-slate-700
               transition duration-300 cursor-pointer md:px-4 md:py-2 md:text-xl"
                  >
                    {project.like}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reavel>
      ))}
    </div>
  );
};

export default Portfolio;
