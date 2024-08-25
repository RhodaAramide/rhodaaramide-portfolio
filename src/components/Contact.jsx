import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const contactInfo = [
    {
    icon: <FaPhoneAlt />, 
    name: "Phone",
    info: "+234 81 0580 9460",
},
    {
    icon: <FaEnvelope />, 
    name: "Email",
    info: "olabisiabolarin5@gmail.com",
},
    {
    icon: <FaMapMarkerAlt />, 
    name: "Address",
    info: "Ibadan, Oyo State, Nigeria",
    },
];
const Contact = () => {
   
    return (
      <motion.section
      initial={{ opacity: 0 }}
     animate={{ opacity: 1,
     transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
    }}
    className="py-6"
      >
      <div className='container mx-auto '>
            <div className='flex flex-col xl:flex-row gap-[30px]'>
                {/* form */}
                <div className="xl:w-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-white/10 rounded-xl">
                        <h3 className="text-4xl font-bold text-accent ">Let's work together</h3>
                        <p className="text-white/60">
                        I am interested in great opportunities - especially
                  ambitious and large projects. However, if you have
                  other requests or questions, don't hestitate to contact
                  me using the form below.
                        </p>
                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                              type='firstname' 
                              name='firstname'
                              placeholder='First name'
                              required
                               className="flex h-[48px] rounded-md border border-white/10
                               focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"                             
                              />
                              <input 
                              type='lastnam' 
                              name='lastname'
                              placeholder='Last name'
                              required
                              className="flex h-[48px] rounded-md border border-white/10
                              focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"                             
                             />
                              <input 
                              type='email' 
                              name='email'
                              placeholder='Email'
                              required
                              className="flex h-[48px] rounded-md border border-white/10
                              focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"                             
                             />
                              <input 
                              type='phone' 
                              name='phone'
                              placeholder='Phone number'
                              required
                              className="flex h-[48px] rounded-md border border-white/10
                              focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"                             
                             />                             
                        </div>
                        <textarea
                                name='message'
                                placeholder='Type your message here...'
                                required
                                className="flex min-h-[80px] h-[200px] w-full rounded-md border border-white/10
                              bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none
                              focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0
                              disabled:cursor-not-allowed disabled:opacity-50"                             
                            
                        ></textarea> 
                        <div className="flex justify-center">
                        <button className="max-w-40 flex items-center justify-center text-md bg-accent hover:bg-secondary text-white/80 font-bold py-3 px-4 rounded-full mt-2">
                            Send Message    
                        </button>
                        </div>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {contactInfo.map((info, index) => {
                            return (
                                <li key={index} className="flex gap-6 items-center mb-4">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent bg-white/10 rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{info.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl text-accent">{info.name}</h4>
                                        <p className="text-white/60">{info.info}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>                  
  
          </div>      
      
      </motion.section>
    )
  }
  
  export default Contact