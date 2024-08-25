import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaGit,
    FaSass,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
} from "react-icons/si";

const skills = {
    title: "My Skills",
    description: "I have experience using these technologies and frameworks.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon:  <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React JS",
        },
        {
            icon: <FaGit />,
            name: "Git",
        },
        {
            icon: <FaSass />,
            name: "Sass",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next JS",
        },
    ]
  }

const Skills = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
    }}
    className='flex items-center justify-center py-12 xl:py-0'
    >
    <div className="container mx-auto">
    <div className='flex flex-col xl:flex-row justify-end gap-4'>
        <div className='w-2/4 '>            
        <h1 className='w-full text-xl bg-accent hover:bg-secondary text-white font-bold py-2 px-4 mr-4 rounded mt-4'>{skills.title}</h1>
        <div className="">
        {skills.skillList.map((skill, index) => (
          <div key={index}>
            <div className="w-full h-[] bg-white/20 rounded-xl 
            flex justify-start items-left group">
                <div className='font-bold px-8 group-hover:text-accent transition-all
                duration-300'>
                {skill.name}
            </div>
            </div>
          </div>
        ))}
      </div>
        </div>
        <div className='mt-4'>
            
        <p className='w-3/4 text-center xl:text-left mt-4 text-white/80 mb-8'>{skills.description}</p>
            
      <div className="grid grid-cols-2 sm:grid-cols-3 
      md:grid-cols-4 xl:gap-4 gap-8">
        {skills.skillList.map((skill, index) => (
          <div key={index}>
            <div className=''>
                <div className="w-full text-lg h-[] bg-accent rounded-t-xl 
            flex justify-center items-center group">
                <div className='font-bold group-hover:text-accent-hover transition-all
                duration-300'>
                {skill.name}
            </div>
            </div>
            <div className='text-8xl group-hover:text-accent transition-all
                duration-300'>
            <div className="w-full h-[150px] px-12  bg-white/20 rounded-b-xl 
            flex justify-center items-center group">
                
                {skill.icon}
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
        </div>
    </motion.div>
  );
};

export default Skills;
