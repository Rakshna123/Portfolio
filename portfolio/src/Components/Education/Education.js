import React from 'react'
import '../../Style/Education.css'
import {VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { MdSchool } from "react-icons/md";
const Education = () => {
  return (
    <>
    <div className='container education ' id="education">
        <h1 className='col-12 mt-3 mb-1 text-center top'>EDUCATIONAL QUALIFICATIONS</h1>
         <hr/>
     <VerticalTimeline>
         <VerticalTimelineElement
           className="vertical-timeline-element--work edu"
           contentStyle={{ background: 'rgb(19, 135, 129)', color: 'white', fontFamily:"times new roman" }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(19, 135, 129)' }}
           date="2019-2023"
           dateClassName="custom-date-color"
           iconStyle={{ background: 'rgb(19, 135, 129)', color: '#fff' }}
           icon={<MdSchool/>}
           contentClassName="custom-content-style"
          >
            <h3 className="vertical-timeline-element-title">B.E</h3>
            <h4 className="vertical-timeline-element-subtitle">Biomedical Engineering</h4>
            <h5 className="vertical-timeline-element-subtitle" style={{color:"black"}}>👉<b>8.68 CGPA</b></h5>
            <h4 className="vertical-timeline-element-subtitle">Dr.N.G.P. Institute of Technology, Coimbatore</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(19, 135, 129)', color: 'white', fontFamily:"times new roman" }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(19, 135, 129)' }}
           date="2018-2019"
           dateClassName="custom-date-color"
           iconStyle={{ background: 'rgb(19, 135, 129)', color: '#fff' }}
           icon={<MdSchool/>}
          >
            <h3 className="vertical-timeline-element-title">HSC</h3>
            <h4 className="vertical-timeline-element-subtitle">Biology</h4>
            <h5 className="vertical-timeline-element-subtitle" style={{color:"black"}}>👉<b>86%</b></h5>
            <h4 className="vertical-timeline-element-subtitle">Saratha Matric Higher Secondary School, Gbichettipalayam </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(19, 135, 129)', color: 'white', fontFamily:"times new roman" }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(19, 135, 129)' }}
           date="2016-2017"
           dateClassName="custom-date-color"
           iconStyle={{ background: 'rgb(19, 135, 129)', color: 'white' }}
           icon={<MdSchool/>}
          >
            <h3 className="vertical-timeline-element-title">SSLC</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{color:"black"}}>👉<b>98%</b></h5>
            <h4 className="vertical-timeline-element-subtitle">Saratha Matric Higher Secondary School, Gbichettipalayam </h4>
        </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education