// About component contains the content in the about section of the website

import {FaLinkedin, FaGithub} from "react-icons/fa"
import Resume from "../Resume/Shukla_Shaswat_Resume.pdf"
function About() {
  return (
    <div className="about_section" id="about">
      <h1 className="bold_name">Shaswat Shukla</h1>
      <p className="short_intro">MS CS student @ Purdue University</p>
      <a href="http://linkedin.com/in/shaswat-shukla/" target="_blank"><FaLinkedin className="about_icons"/></a>
      <a href="https://github.com/SHASWAT2000-loves-logic?tab=repositories" target="_blank"><FaGithub className="about_icons"/></a> 
      <p>I am a first year masters student studying computer science at Purdue University. Before starting my masters, I worked for almost a year at the New Mexico Environment Department as a software developer. I did my undergad in computer science at the University of New Mexico (UNM). During my undergrad, I did research internships at Purdue and Stanford, where I worked in many subareas area of robotics such as swarm robotics, robot manufacturing and autonomous navigation in robots. Apart from software development and robotics, I have experience in 3D printing (additive manufacturing), CAD modelling and human computer interaction</p>
      <br />
      <p className="additional_info"><span className="bold">Interests</span> – Software Engineering, full stack development, UI/UX</p>
      <p className="additional_info"><span className="bold">Proficient</span> – HTML, CSS (SASS/LESS), JavaScript (React, Angular, Node), Python (Flask), Java, MySQL</p>
      <p className="additional_info"><span className="bold">Tools</span> – AWS, Git, Linux, Webpack, Babel, Netlify, Vercel, VS Code</p>
      <br />

      <a href={Resume} target="_blank" className="resume"><span className="highlighted">Resume</span></a>
    </div>
  )
}

export default About
