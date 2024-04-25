import React, {useState} from 'react'
import '../../Style/MobileNav.css'
import { FcHome, FcAbout, FcReading, FcVideoProjector, FcContacts  } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import {Link} from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const MobileNav = () => {
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
   } 

   const handleMenuClick = () => {
    setOpen(false);
   }
  return (
    <>
    <div className='mobile-nav'>
        <div className='mobile-nav-header'>
            {open ? (
            <AiOutlineMenuUnfold 
            size={30} 
            className='mobile-nav-icon' 
            onClick={handleOpen}/>
            ) : ( 
            <GiHamburgerMenu 
            size={30} 
            className='mobile-nav-icon' 
            onClick={handleOpen}/>
            )}
            <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {open && (
         <div className='mobile-nav-menu'>
         <div className='nav-items'>
            <div className='nav-link first'>
              <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={100}
              onClick={handleMenuClick}>
              <FcHome />
              <span>  Home</span>
              </Link>
             </div>
             <div className='nav-link'>
               <Link
               to="about" 
               spy={true} 
               smooth={true} 
               offset={-100} 
               duration={100}onClick={handleMenuClick}>
               <FcAbout />
              <span>  About me</span>
              </Link>
             </div>
             <div className='nav-link'>
               <Link
               to="education" 
               spy={true} 
               smooth={true} 
               offset={-100} 
               duration={100}
               onClick={handleMenuClick}>
               <FcReading />
               <span>  Education</span>
               </Link>
              </div>
              <div className='nav-link'>
                <Link
                to="techstack" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={100}
                onClick={handleMenuClick}>
                <GiSkills />
                <span>  Tech Stack</span>
                </Link>
               </div>
               <div className='nav-link'>
                 <Link
                 to="project" 
                 spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}
                 onClick={handleMenuClick}>
                 <FcVideoProjector />
                 <span> Projects</span>
                 </Link>
               </div>
               <div className='nav-link'>
                 <Link
                 to="contact" 
                 spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}
                 onClick={handleMenuClick}>
                 <FcContacts/>
                 <span>  Contact</span>
                 </Link>
               </div>
           </div>
      </div>
        )}
        
    </div>
    </>
  )
}

export default MobileNav