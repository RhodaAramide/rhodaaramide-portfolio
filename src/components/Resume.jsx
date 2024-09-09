import React from 'react'
import { motion } from 'framer-motion';


//education data
const education = {
    title: "My Education",
    description: "I have a degree in Computer Science from the University of Ibadan. I have also taken several online courses on fontend development and design.",
    items:[
         {
        institution: "University of Ibadan",
        degree: "BSc. Computer Science",
        duration: "2018 - 2024",
    },
     {
        institution: "ALX-Udacity NanoDegree Program",
        degree: "Fullstack Development",
        duration: "2022",
    },
    {
        institution: "DevCareer Tech Program",
        degree: "Frontend Engineering",
        duration: "2023",
    },
    {
        institution: "Gymnasium",
        degree: "Modern Web Design",
        duration: "2021",
    }
],
}

//experience data
const experience = {
    title: "My Experience",
    description: "I have worked on several projects as a frontend developer. I have also worked as an intern for a few companies.",
    items:[
        {
        company: "Programmify(Remote)",
        role: "Frontend Developer Intern",
        duration: "July, 2024 till Date",
    },
    {
        company: "Nigerian Meteorological Agency(NiMet), Abuja",
        role: "Software Developer Intern",
        duration: "March, 2023 - August, 2023",
    },
    {
        company: "International Institute of Tropical Agriculture(IITA), Ibadan",
        role: "IT Systems and Application Intern",
        duration: "February, 2022 - August, 2023",
    },
    {
        company: "Nigerian Meteorological Agency(NiMet), Abuja",
        role: "Systems and Software Intern",
        duration: "March, 2020 - June, 2020",
    },    
],
}

const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
        opacity: 1,
        transition: {delay: 1.4, duration: 0.4, ease: 'easeIn'},
    }}
    className='flex items-center justify-center py-12 xl:py-0'
    >
       <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-end gap-4 order-2'>
        <div className='w-2/4'>
        <h1 className='w-full text-xl bg-accent hover:bg-secondary text-white font-bold py-2 px-4 mr-4 rounded mt-4'>{education.title}</h1>
        </div>
        <div className='mt-4'>
            
            <p className='w-3/4 text-center xl:text-left mt-4 text-white/80 mb-8'>{education.description}</p>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
                {education.items.map((item, index) => (
                    <div key={index} className='bg-white/10 h-[140px] py-4 px-10
                    rounded-xl flex flex-col justify center items-center lg:items-start gap-1'>
                        <p className='text-accent'>{item.duration}</p>
                        <h2 className=''>{item.institution}</h2>
                        <p className=''>{item.degree}</p>
                        
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className='flex mt-8 flex-col xl:flex-row justify-end gap-4 order-1 mb-8'>
        <div className='w-2/4'>
        <h1 className='w-full text-xl bg-accent hover:bg-secondary text-white font-bold py-2 px-4 mr-4 rounded mt-4'>{experience.title}</h1>
        </div>
        <div className='mt-4'>
            
            <p className='w-3/4 text-center xl:text-left mt-4 text-white/80 mb-8'>{experience.description}</p>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
                {experience.items.map((item, index) => (
                    <div key={index} className='bg-white/10 h-[200px] py-6 px-10
                    rounded-xl flex flex-col justify center items-center lg:items-start gap-1'>
                        <p className='text-accent'>{item.duration}</p>
                        
                        <p className='text-lg max-w-[260px] min-h-[50px] text-center lg:text-left'>{item.role}</p>
                        <div className='flex items-center gap-3'>                           
                            <p className='text-white/60 text-lg pb-2 font-bold'>{item.company}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        
        </div>

    </motion.div>
  )
}

export default Resume