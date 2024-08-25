import profile from '../assets/images/profile.jpeg';
import { motion } from 'framer-motion';



const Photo = () => {
  return (
    <div className='w-full h-full relative'>
        <motion.div initial={{opacity: 0}} 
        animate={{opacity: 1,
        transition: {delay: 2, 
            duration: 0.4, 
            ease: 'easeIn'}}}
            className="">
            <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1,
            transition: {delay: 2.4, 
                duration: 0.4, 
                ease: 'easeInOut'}}}
            >
                <motion.img src={profile} 
                priority="true" quality={100}
                fill="true"
                alt="profile" 
                className='w-[298px] h-[298px] 
                xl:w-[460px] xl:h-[460px] rounded-full
                mix-blend-lighten object-contain'
                />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo