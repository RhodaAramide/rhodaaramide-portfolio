
import React from 'react'

import { motion } from "framer-motion"

const about ={
    title: 'About me',
    description: "A Frontend Developer living in Nigeria.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Abolarin Olabisi Rhoda"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+234) 81 0580 9460",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Nigerian",
        },
        {
            fieldName: "Email",
            fieldValue: "olabisiabolarin5@gmail.com",
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Yoruba",
        }

    ]
};

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
     animate={{ opacity: 1,
     transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
    }}
    className=""
      >
    <div className='container mx-auto'>
        <div className='w-full text-center pb-4 xl:text-left'>
            <div className='flex flex-col gap-[30px]'>
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className='max-w-[600px] text-white/60 text-xl font-bold mx-auto xl:mx-0'>
            {about.description} </p>
            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-8 
            max-w-[620px] mx-auto xl:mx-0'>
                {about.info.map((item, index) =>  {
                    return (
                        <li key={index}
                        className='flex items-center justify-center
                        xl:justify-start gap-4'>
                            <span className='text-accent font-bold'>{item.fieldName}:</span>
                            <span className='text-xl'>{item.fieldValue}</span>
                        </li>
                    );
                })

                }

            </ul>
            <p>             
            I build solutions to business problems by creating delightful frontend experiences 
            and high-performance applications that meet the needs of end-users.
            </p>
            <div>
            <p>
                If I need to define myself in one sentence, that 
                would be an enthusiastic and goal driven person who 
                also loves football, music and good food.
                In my free time. I enjoy exploring new places, trying new foods, and staying
                active through exercise and playing games. </p>
                <p className='mt-4'>
                    
                Thank you for taking the time to learn more about me. 
                I am excited to connect with you and explore how we can work together to create meaningful solutions to business problems.
                </p>
            </div>
        </div>
        </div>
    </div>  

    
    </motion.section>
  )
}

export default About;