import React from 'react';
import '../../Style/Menu.css';
import profile from '../../Assets/profile.jpg';
import { FcHome, FcAbout, FcReading, FcVideoProjector, FcContacts  } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import {Link} from 'react-scroll'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import Jump from 'react-reveal/Jump';

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <div className='navbar'>
        <Zoom>
        <div className='navbar-profile-pic'>
            <img className='proimage' src={profile} alt="no" />
          </div> 
        </Zoom>
        <Fade left>
          <div className='nav-items'>

            <div className='nav-link first'>
              <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={100}>
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
              duration={100}>
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
               duration={100}>
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
              duration={100}>
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
               duration={100}>
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
              duration={100}>
              <FcContacts/>
              <span>  Contact</span>
              </Link>
            </div>
          </div>
          </Fade>
      </div>
     ) : (
        <>
        <div className='nav-items second'>
            <div className='nav-link first'>
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={100}>
              <FcHome />
              </Link>
            </div>
            <div className='nav-link'>
            <Link
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={100}>
              <FcAbout />
              </Link>
            </div>
            <div className='nav-link'>
            <Link
               to="education" 
               spy={true} 
               smooth={true} 
               offset={-100} 
               duration={100}>
                <FcReading />
              </Link>
            </div>
            <div className='nav-link'>
            <Link
              to="techstack" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={100}>
              <GiSkills />
              </Link>
            </div>
            <div className='nav-link'>
            <Link
               to="project" 
               spy={true} 
               smooth={true} 
               offset={-100} 
               duration={100}>
              <FcVideoProjector />
              </Link>
            </div>
            <div className='nav-link'>
            <Link
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={100}>
              <FcContacts/>
              </Link>
            </div>
          </div>
</>
      )}
    </>
  );
};

export default Menu;
