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
const MobileNav = () => {
  return (
    <div>MobileNav</div>
  )
}

export default MobileNav