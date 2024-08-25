import { useState } from 'react';
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom';

const links = [
  { 
    name: "home", 
    path: "/" 
},
  { 
    name: "about", 
    path: "/about" 
},
{ 
    name: "skills", 
    path: "/skills" 
},
  { 
    name: "resume", 
    path: "/resume" 
},
{ 
    name: "projects", 
    path: "/projects" 
},
{ 
    name: "contact", 
    path: "/contact" 
},
];

const Navbar = () => {
    const pathname = useLocation().pathname;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (        
        <nav className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        
                        <div className="hidden md:block">
                            <div className="mr-8 flex items-baseline space-x-4">
                            {links.map((link, index) => {
                                return (
                                <Link to={link.path} key={index} 
                                    className={`${
                                        link.path === pathname 
                                        && "text-accent border-b-2 border-accent"
                                    } capitalize text-lg font-bold hover:text-accent transition-all
                                    > 
                                    }`}>
                                    {link.name}
                                </Link>     
                            );  
                        })}
                            <Link to="https://docs.google.com/document/d/1oeh65KCq0XOKJRKQbkBtcUXeHl04gw-95GCGJSgIEWc/edit?usp=sharing">
                                <button className="flex items-center gap-2 text-lg bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded-full mt-4">
                                        My CV
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-4 flex md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:text-secondary hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6 mr-8`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="flex flex-col items-baseline gap-4 p-4 sm:px-3">
                        {links.map((link, index) => {
                        return (
                        <Link to={link.path} key={index} 
                            className={`${
                                link.path === pathname 
                                && "text-accent  border-b-2 border-accent"
                            } capitalize text-lg font-bold hover:text-accent transition-all
                            > 
                            }`}>
                            {link.name}
                        </Link>     
                    );  
                })}
            </div>
        </div>
        </div>
        </nav>
    );
}
export default Navbar;