import React from 'react'
import { motion } from 'framer-motion'
import './Experience.css'
// import Reveal from './Reveal'
import { asserts } from '../assets/assest'

const experiences = [
    {   
        company: 'Gandhi Institute for Technological Advancement, Bhubaneswar',
        course: "B.Tech Computer Science and Engineering",
        period: '2020-2024',
        
      },
      {
        company: 'Kaptipada H S School, Kaptipada',
        course: "CHSE (Class XII), Science",
        period: '2018-2020',
       
      },
      {
        company: 'M. M. Saraswati Sishu Vidya Mandir, Nayabazar, Bhadrak',
        period: '2018',
        course: 'BSE (Class X)',
      },
      
]



const Experience = () => {
  return (
    <div id='experience' className='p-8 max-w-[600px] mx-auto '>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Education</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/5'
                >
                    <h2 className='text-gray-100 text-base md:text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-400 mt-4 text-sm md:text-sm'>{experience.course}</p>
                    <p className='text-gray-300 mt-2 text-sm md:text-base'>{experience.period}</p>
                    


                </motion.div>
                
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience