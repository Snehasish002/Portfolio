import React from "react"
import Reavel from "./Reavel";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import { SiExpress, SiAdobephotoshop, SiAdobeaftereffects, SiPostman, SiGit, SiTailwindcss } from "react-icons/si";

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Tailwind', icon: <SiTailwindcss className='text-sky-500' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'Node', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'Express', icon: <SiExpress className='text-gray-200' /> },
      ],
    },
    {
      category: 'Tools',
      technologies: [
        
        { name: 'Postman', icon: <SiPostman className='text-orange-700' /> },
        { name: 'Git', icon: <SiGit className='text-red-600' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-300' /> },
        { name: 'Ae', icon: <SiAdobeaftereffects className='text-indigo-600' /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop className='text-sky-600' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto items-center flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12 " id="skills">
      <Reavel>
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <p className="text-center mb-8">
            I worked on various projects. Check them <a href="https://github.com/Snehasish002" className="underline"><span>there</span></a>.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
        {skills.map((skill,index) => (
            <div key={index} className="border border-purple-900 p-6 rounded-lg bg-white/5 shadow-lg 
                                w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                    {skill.technologies.map((tech,idx)=> (
                        <div key={idx} className="flex items-center space-x-2">
                            <span className="text-2xl">{tech.icon}</span>
                            <span className="text-gray-400">{tech.name}</span>

                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    </Reavel>
    </div>

    
    
  )
}

export default Skills
