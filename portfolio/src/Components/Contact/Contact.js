import React from 'react';
import '../../Style/Contact.css';
import contact from '../../Assets/contact.avif';
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
// import { IoLogoInstagram } from "react-icons/io5";
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';

const Contact = () => {
  const email = 'rakshnakb@gmail.com';
  const linkedIn = "https://www.linkedin.com/in/rakshna-balasubramanian-b020b6225"
  const github = "https://github.com/Rakshna123"
  const whatsappNumber = '8526143444';
 
  const handleEmailClick = () => {
   window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
 };
 const handleWhatsAppClick = () => {
  window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
};

  return (
    <>
      <div className='contact' id="contact">
        <div className='cards cards0 border-0'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <div className='cards1'>
                <div className='row border-line'>
                  <LightSpeed>
                    <img src={contact} alt="contact" className='contactImage'/>
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <Rotate>
                <div className='cards2 d-flex card border-0 px-4 py-5 connect'>
                  <h5>Connect with 
                  <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin color='blue' className='ms-2 linkedIn' size={30}/>
                  </a>
                  <a href={github} target='_blank' rel="noopener noreferrer">
                    <SiGithub color='black' className='ms-2 github' size={30}/>
                  </a>
                    {/* <IoLogoInstagram color='deeppink'  className='ms-2' size={30} /> */}
                  </h5>
                </div>
                <div className='row px- mb-6'>
                  <div className='line'>
                    <h3 className='or'>OR</h3>
                    <div className='line'></div>
                    <br/>
                    <div className='row px-3'>
                      <a href={`mailto:${email}`} target='_blank'  rel="noopener noreferrer"></a>
                      <button onClick={handleEmailClick} className='messagebtn' type='submit' >SEND EMAIL ✉</button>
                      <br/>
                      <button onClick={ handleWhatsAppClick} className='messagebtn' type='submit' >SEND MESSAGE 📃🖋</button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
