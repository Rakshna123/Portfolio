import React from 'react'
import '../../Style/Project.css'
import food from '../../Assets/food.jpg'
// import port from '../../Assets/portfolio.webp'
import movie from '../../Assets/movie.avif'
import weather from '../../Assets/weather.jpg'
import grocery from '../../Assets/grocery.jpg'
import Spin from 'react-reveal/Spin'
import { SiGithub } from "react-icons/si";
const Project = () => {
  return (
    <>
    <div className='container project' id="project">
    <h1 className='col-12 mt-3 mb-1 text-center top'>TOP RECENT PROJECTS</h1>
         <hr/>
         <br/>
         <p className='pb-3 text-center'>
            <h1 className='head'>Here are my projects using MERN stack</h1>
            <p className='project-content'>Explore a collection of my projects showcasing the power and versatility of the 
            MERN Stack (MongoDB, Express.js, React.js, Node.js). From dynamic web applications to intuitive user interfaces, 
            each project demonstrates the seamless integration of HTML, CSS, and Bootstrap with React.js for polished front-end 
            designs. Meanwhile, Node.js and Express.js handle server-side operations, ensuring efficient data management and
            smooth user experiences. Leveraging MongoDB, these projects utilize a flexible and scalable NoSQL database for seamless
            data storage and retrieval. Whether it's building interactive web applications, integrating real-time updates, or 
            implementing secure payment gateways, my MERN Stack projects showcase innovation and expertise in modern web development.</p>
         </p>
         <div className='row' id='ads'>
        <Spin>
        <div className='col-md-4'>
                <div className='card rounded main'>
                    <div className='card-image'>
                       <span className='card-notify-badge'><b>Full Stack</b></span>
                       <br/>
                       <br/>
                       <center><img src={food} alt="Project1" style={{height:"170px", width:"400px"}}/></center>
                       <br/>
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Node JS</span>
                        <span className='card-detail-badge'>Express JS</span>
                        <span className='card-detail-badge'>React JS</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 style={{color:"red"}}> 👉 ONLINE FOOD ORDER WEBSITE</h5>
                            {/* <p className='food-content'>Developed an innovative online food ordering website using the MERN Stack. 
                            Leveraging MongoDB and Mongoose for seamless data management, users can browse and filter food options 
                            by meal type, cuisine, and cost. Node.js and Express.js handle server-side operations efficiently, while 
                            React.js powers the responsive front end. Additionally, Razorpay gateway is seamlessly integrated for 
                            secure payments, ensuring a smooth transaction. This project exemplifies cutting-edge technology in creating
                             user-friendly digital platforms.</p> */}
                        </div>
                        <a href="https://admirable-taffy-caca3c.netlify.app" className='ad-btn' target='_blank'>View</a>
                        <a href="https://github.com/Rakshna123/Online-Food-Order-Website_Frontend" className='git-btn' target='_blank'><SiGithub color='black' className='ms-2 github' size={30}/>   GitHub</a>
                    </div>
                </div>
             </div>    
        <div className='col-md-4'>
                <div className='card rounded main'>
                    <div className='card-image'>
                       <span className='card-notify-badge'><b>Frontend</b></span>
                       <br/>
                       <br/>
                       <center><img src={weather} alt="Project1" style={{height:"170px", width:"400px"}}/></center>
                       <br/>
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>HTML</span>
                        <span className='card-detail-badge'>CSS</span>
                        <span className='card-detail-badge'>React JS</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='weather' style={{color:"red"}}> 👉WEATHER PREDICTION USING REACTJS</h5>
                            {/* <p className='food-content'>Develop a React-based weather prediction app that seamlessly integrates latitude and longitude 
                            coordinates to fetch real-time data such as wind speed and humidity based on user-inputted city names. Implementing a clean 
                            user interface, users can effortlessly access accurate weather information by simply entering the city name. By leveraging 
                            APIs like OpenWeatherMap, the app dynamically updates with precise data, providing users with up-to-date forecasts at their 
                            fingertips. Experience instant weather updates with our user-friendly website</p> */}
                        </div>
                        <a href="https://zippy-figolla-cb4039.netlify.app" className='ad-btn' target='_blank'>View</a>
                        <a href="https://github.com/Rakshna123/Weather-prediction" className='git-btn' target='_blank'><SiGithub color='black' className='ms-2 github' size={30}/>   GitHub</a>
                    </div>
                </div>
             </div>
         <div className='col-md-4'>
                <div className='card rounded main'>
                    <div className='card-image'>
                       <span className='card-notify-badge'><b>Front end</b></span>
                       <br/>
                       <br/>
                       <center><img src={movie} alt="Project1" style={{height:"170px", width:"400px"}}/></center>
                       <br/>
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>HTML</span>
                        <span className='card-detail-badge'>CSS</span>
                        <span className='card-detail-badge'>JavaScript</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 style={{color:"red"}}> 👉MOVIE RATING SYSTEM </h5>
                            {/* <p className='food-content'>Created a personal portfolio with MERN Stack showcasing a collection of innovative
                            projects. Leveraging MongoDB, Express.js, React.js, and Node.js, each project demonstrates my expertise in 
                            full-stack web development. With sleek front-end designs crafted using HTML, CSS, and Bootstrap, paired with 
                            robust server-side operations, these projects offer seamless user experiences. Explore my work, learn more 
                            about my tech stacks, and connect with me for collaborations or inquiries. Let's build something amazing 
                            together!</p> */}
                        </div>
                        <a href="https://heartfelt-cannoli-265d08.netlify.app" className='ad-btn' target='_blank'>View</a>
                        <a href="https://github.com/Rakshna123/Movie-Rating-System" className='git-btn' target='_blank'><SiGithub color='black' className='ms-2 github' size={30}/>   GitHub</a>
                    </div>
                </div>
             </div>
             <div className='col-md-4' style={{marginTop:"35px"}}>
                <div className='card rounded main'>
                    <div className='card-image'>
                       <span className='card-notify-badge'><b>Front end</b></span>
                       <br/>
                       <br/>
                       <center><img src={grocery} alt="Project1" style={{height:"170px", width:"400px"}}/></center>
                       <br/>
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>HTML</span>
                        <span className='card-detail-badge'>CSS</span>
                        <span className='card-detail-badge'>JavaScript</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 style={{color:"red"}}> 👉GROCERY LISTING </h5>
                            {/* <p className='food-content'>Created a personal portfolio with MERN Stack showcasing a collection of innovative
                            projects. Leveraging MongoDB, Express.js, React.js, and Node.js, each project demonstrates my expertise in 
                            full-stack web development. With sleek front-end designs crafted using HTML, CSS, and Bootstrap, paired with 
                            robust server-side operations, these projects offer seamless user experiences. Explore my work, learn more 
                            about my tech stacks, and connect with me for collaborations or inquiries. Let's build something amazing 
                            together!</p> */}
                        </div>
                        <a href="https://golden-stardust-05a677.netlify.app" className='ad-btn' target='_blank'>View</a>
                        <a href="https://github.com/Rakshna123/Grocery-List" className='git-btn' target='_blank'><SiGithub color='black' className='ms-2 github' size={30}/>   GitHub</a>
                    </div>
                </div>
             </div>
             <div className='col-md-4'  style={{marginTop:"35px"}}>
                <div className='card rounded main'>
                    <div className='card-image'>
                       <span className='card-notify-badge'><b>Full stack</b></span>
                       <br/>
                       <br/>
                       <center><img src={movie} alt="Project1" style={{height:"170px", width:"400px"}}/></center>
                       <br/>
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>Node JS</span>
                        <span className='card-detail-badge'>Express JS</span>
                        <span className='card-detail-badge'>React JS</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 style={{color:"red"}}> 👉TODOLIST </h5>
                            {/* <p className='food-content'>Created a personal portfolio with MERN Stack showcasing a collection of innovative
                            projects. Leveraging MongoDB, Express.js, React.js, and Node.js, each project demonstrates my expertise in 
                            full-stack web development. With sleek front-end designs crafted using HTML, CSS, and Bootstrap, paired with 
                            robust server-side operations, these projects offer seamless user experiences. Explore my work, learn more 
                            about my tech stacks, and connect with me for collaborations or inquiries. Let's build something amazing 
                            together!</p> */}
                        </div>
                        {/* <a href="https://heartfelt-cannoli-265d08.netlify.app" className='ad-btn' target='_blank'>View</a> */}
                        <a href="https://github.com/Rakshna123/TodoList_backend" className='git-btn' target='_blank'><SiGithub color='black' className='ms-2 github' size={30}/>   GitHub</a>
                    </div>
                </div>
             </div>
             </Spin>
         </div>
        
    </div>
    </>
  )
}

export default Project