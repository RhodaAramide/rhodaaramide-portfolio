import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';

import project1 from "../assets/images/projects/1.png";
import project2 from "../assets/images/projects/2.png";
import project3 from "../assets/images/projects/3.png";
import project4 from "../assets/images/projects/4.png";
import project5 from "../assets/images/projects/5.png";
import project6 from "../assets/images/projects/6.png";
import project7 from "../assets/images/projects/7.png";

// Import Swiper styles
import 'swiper/css';
import ProjectSlider from './ProjectSlider';


const projects = [  
    {
        id: 1,
        num: "01",
        title: "Online Bookstore Website",
        description: "The Bookstore Website is a React.js application that allows users to browse and purchase books online. The website provides a wide selection of books from various genres and authors.",
        stack:[
            { name: "ReactJS"}, 
            { name: "Tailwind CSS" }, 
            
        ],
        image: project1,
        github: "https://github.com/RhodaAramide/bookstore",
        link: "https://bookstore-prjt.onrender.com/",
    },    
    {
        id: 2,
        num: "02",
        title: "Travel and Tours Website",
        description: "EaseExplore is a travel and tours website built using React.js and Tailwind CSS. This website helps to explore and book tours and travel packages to various destinations in Nigeria.",
        stack:[
            { name: "ReactJS"}, 
            { name: "Tailwind CSS" },           
        ],
        image: project2,
        github: "https://github.com/RhodaAramide/travel-tours",
        link: "https://exploreease-fwp8.onrender.com/",
    },    
    {
        id: 3,
        num: "03",
        title: "Personal Budget Tracker",
        description: "A web application that allows users to manage their finances by adding, editing, and deleting income and expense transactions.",
        stack:[
            { name: "HTML5"}, 
            { name: "CSS3" }, 
            {name: "JavaScript" },
        ],
        image: project3,
        github: "https://github.com/RhodaAramide/Budget-Tracker",
        link: "https://rhodaaramide.github.io/Budget-Tracker/",
    },    
    {
        id: 4,
        num: "04",
        title: "Food Recipe App",
        description: "A food recipe app is a digital platform designed to help users discover, plan, and prepare a wide variety of dishes and meals. This app caters to individuals with diverse culinary interests and skill levels.",
        stack:[
            { name: "ReactJS"}, 
            { name: "SASS" }, 
            {name: "Firebase" },
        ],
        image: project4,
        github: "https://github.com/RhodaAramide/Food-Recipe-App",
        link: "https://rhodafoodrecipe.netlify.app/",
    },
    {
        id: 5,
        num: "05",
        title: "GenVista",
        description: "This Genome Browser is a comprehensive web-based tool designed to visualize, analyze, and annotate genomic data. It offers an intuitive user interface with features such as zooming, panning, and searching, along with customizable visualization settings.",
        stack:[
            { name: "ReactJS"}, 
            { name: "SASS" },
            
        ],
        image: project5,
        github: "https://github.com/RhodaAramide/Gene-Visual",
        link: "https://genvista.onrender.com/",
    },
    {
        id: 6,
        num: "06",
        title: "Finance Dashboard",
        description: "This is a finance dashboard that comes up after a login page with different sections like products, customer and team and a logout tab.",
        stack:[
            { name: "REACT JS"}, 
            { name: "CSS3" }, 
            {name: "JavaScript" },
        ],
        image: project6,
        github: "https://github.com/RhodaAramide/Group-10-React-Project",
        link: "https://group10-capstone2.netlify.app/dashboard",
    },
    {
        id: 7,
        num: "07",
        title: "Fylo dark theme landing page",
        description: "A dark-themed landing page for Fylo that stores all your most important files in one secure location and you can access them wherever you need, share and collaborate.",
        stack:[
            { name: "HTML5"}, 
            { name: "CSS3" },             
        ],
        image: project7,
        github: "https://github.com/RhodaAramide/fylo-dark-theme-landingpage",
        link: "https://olokoburnfire.github.io/fylo-dark-theme-landing-page/",
    },
]

const Projects = () => {
    const [project, setProject] = useState(projects[0]);
    
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1,
            transition: {delay: 1.4, duration: 0.4, ease: 'easeIn'}
    }}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
    <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-4'>
        <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col
        xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
                {/* project number */}
                <div className='text-8xl leading-none font-extrabold text-accent '>
                    {project.num}                    
                </div>
                {/* project title */}
                <h2 className='text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-500 capitalize'>
                    {project.title}
                </h2>
                {/* project description */}
                <p className='text-white/60'>
                {project.description}
                </p>
                {/* project stack */}
                <ul className='flex gap-4'>
                    {project.stack.map((item, index) => {
                        return <li key={index}
                        className='text-xl text-accent'>
                            {item.name}
                            {/* remoce the last comma */}
                            {index !== project.stack.length -1 && ","}
                        </li>
                    })}
                </ul>
                {/* border */}
                <div className='border border-white/20'>

                </div>
                {/* links */}
                <div className='flex items-center gap-4'>
                    <Link to={project.link}>
                    <div className='w-[70px] h-[70px] rounded-full bg-white/5 
                    flex justify-center items-center group'>
                    <BsArrowUpRight className='text-white text-3xl
                    group-hover:text-accent' />
                    </div>
                    </Link>
                    <Link to={project.github}>
                    <div className='w-[70px] h-[70px] rounded-full bg-white/5 
                    flex justify-center items-center group'>
                    <BsGithub className='text-white text-3xl
                    group-hover:text-accent' />
                    </div>
                    </Link>
                </div>
            </div>        
        </div>
        <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
                {projects.map((project, index) => {
                    return <SwiperSlide key={index}
                    className="w-full">
                        <div className='h-[280px] relative
                        group flex justify-center items-center bg-'>
                            <div className="absolute top-0 bottom-0 w-full h-full
                            bg-black/10 z-10">

                            </div>
                            <div className='relative w-full h-full md:mt-12'>
                                <img src={project.image} 
                                    fill="true"
                                    alt=""
                                    className='object-cover w-full h-[280px]'
                                />
                            </div>

                        </div>
                    </SwiperSlide>
                })}
                {/* slider buttons */}
                <ProjectSlider containerStyles="flex gap-2 absolute right-0
                bottom-[calc(50%_-_22px)] xl:bottom-40 z-20 w-full justify-between
                xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary
                text-[22px] w-[44px] h-[44px] flex justify-center
                items-center transition-all"/>
            </Swiper>
        </div>
        </div>
    </div>

    
    </motion.section>

  )
}

export default Projects;