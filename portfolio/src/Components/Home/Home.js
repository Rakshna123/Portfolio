import React from 'react'
import '../../Style/Home.css';
import TypeWriter from 'typewriter-effect'
import Resume from '../../Assets/docs/Rakshna resume (2).pdf';
import { useTheme } from '../Context/ThemeProvider';
import { BsFillMoonStarsFill,  BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade'
// import { Document, Page } from 'react-pdf';
const Home = () => {
  const [theme, setTheme] = useTheme()
  const handleDownload = () => {
    fetch(Resume)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Rakshna Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };
  const handleTheme = () => {
    setTheme((prevState)=>(prevState === 'light' ? 'dark' : 'light'))
  }
  return (
    <>
    <div className='container-fluid home-container' id="home">
      <div className='theme-btn' onClick={handleTheme}>
        {theme === 'light' ? (<BsFillMoonStarsFill size={30} />) : (< BsFillSunFill size={30} />)}
      </div>
      <div className='container home-content'> 
      <Fade right>
       <h2 className='name'>Hi 👋 I'm Rakshna</h2>
       <h2>I'm a</h2>
       <h1>
        <TypeWriter
          options={{
          strings:[
          'Full Stack Web Developer',
          'React JS Developer', 
          'MERN stack developer'],
          autoStart:true,
          loop:true
        }}
        />
       </h1>
       </Fade>
       <Fade bottom>
       <div className='home-buttons'>
        <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=8526143444"
        rel="noreferror"
        target="_blank">Hire me</a>
        {/* <button className='btn btn-hire'></button> */}
        <button className='btn btn-cv'onClick={handleDownload}>Download CV</button>
       </div>
       </Fade>
      </div>
    </div>
    </>
  )
}

export default Home