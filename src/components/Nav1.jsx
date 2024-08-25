import { Link, useLocation } from "react-router-dom";

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
    name: "services", 
    path: "/services" 
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
    const pathname = useLocation();
  return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
            <Link href={link.path} key={index} 
                className={`${
                    link.path === pathname 
                    && "text-accent border-b-2 border-accent"
                 } capitalize font-medium hover:text-accent transition-all
                 > 
                }`}>
                {link.name}
            </Link>     
        );  
    })}
    </nav>
    );
};

export default Navbar