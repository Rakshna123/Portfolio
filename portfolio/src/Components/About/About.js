import React from 'react'
import "../../Style/About.css";
import profile from '../../Assets/profile.jpg'
import Jump from 'react-reveal/Jump'
const About = () => {
  return (
    <>
    <Jump>
    <div className='about' id="about">
        <div className='row'>
            <div className='col-md-6 col-lg-6 col-sm-12 about-image'>
                <img src={profile} alt="" style={{height:"400px", width:"60%"}}/>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12 about-content'>
              <h1>About me</h1>
                  <p className='myself'>I'm a biomedical engineer with a strong interest in web development, 
                    particularly in creating user-friendly interfaces. Specializing 
                    in front-end development with React.js, I find joy in crafting interfaces
                     that not only look great but also enhance usability and accessibility.
                    I've enhanced my skills in full-stack development with the MERN stack 
                    and I'm eager to apply my knowledge in practical settings.I'm dedicated 
                    to continuous improvement and enjoy collaborating on projects that challenge 
                    and inspire me. In every endeavor, I am committed to continuous learning and 
                    growth, keeping pace with latest trends and best practices in web development. 
                    I am excited about the opportunity to contribute my skills and passion to projects 
                    that push the boundaries of possibility and make a meaningful impact on the digital 
                    landscape.Let's collaborate to create immersive digital experiences that inspire and delight users.
                  </p>
            </div>
        </div>
        <br/>
        <br/>
        <hr className='hr'/>
    </div>
    </Jump>
    </>
  )
}

export default About