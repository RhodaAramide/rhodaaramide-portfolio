import Loader from "react-loaders";
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.jpeg';
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="py-4 xl:py-8 bg-primary text-white">
    
    <div className="container mx-auto flex justify-between items-center">
        
        {/* logo */}
        <Link href="/">
            <h1 className="text-white text-4xl font-bold">
                Rhoda<span className="text-accent">Aramide.</span>
            </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className=""> 
        <Navbar /> 
        </div> 
        
      

    </div>              
    </header>
  )
}

export default Header;