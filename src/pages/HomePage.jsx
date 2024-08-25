
import { Link } from 'react-router-dom';


// component imports
import Social from "../components/Social";
import Photo from "../components/Photo";
import Navbar from "../components/Navbar";

const HomePage = () => {
    return (
        <div className="bg-primary xl:pb-24 text-white h-full">
        <Navbar />
        <div className="container mx-auto mt-6 h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between ">                                        
        <div className="text-center xl:text-left order-2 xl:order-none">
                       
           <h1 className="text-[48px] mb-2 xl:text-[80px] font-semibold">
            Hi, I'm <br />
            <span className="text-accent"> Rhoda Aramide  </span>          
            </h1> 
            <span className="text-2xl font-bold"> Frontend developer </span>          
            <p className="max-w-[500px] mb-8 mt-4 text-white/80">            
            I build solutions to business problems by creating delightful frontend experiences 
            and high-performance applications that meet the needs of end-users.
            </p>
            {/* Hire me button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
             <Link to="/contact">
              <button className="flex items-center gap-2 text-xl bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg">
                    Hire Me
               </button>
             </Link>
             <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-secondary hover:transition-all duration-500"/>
                </div>
             </div>
              </div>
               <div className="order-1 xl:order-none mb-8 xl:mb-0">
                 <Photo />
                </div>
           </div>
        </div>
       

    </div>
    )
}


export default HomePage;