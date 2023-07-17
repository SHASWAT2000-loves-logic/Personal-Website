// About component contains the content in the about section of the website

import {FaLinkedin, FaGithub} from "react-icons/fa"
import Resume from "../Resume/Shaswat Shukla Resume.pdf"
function About() {
  return (
    <div className="about_section" id="about">
      <h1 className="bold_name">Shaswat Shukla</h1>
      <p className="short_intro">Software Developer 1 @ New Mexico Environment Department</p>
      <a href="http://linkedin.com/in/shaswat-shukla/" target="_blank"><FaLinkedin className="about_icons"/></a>
      <a href="https://github.com/SHASWAT2000-loves-logic?tab=repositories" target="_blank"><FaGithub className="about_icons"/></a> 
      <p>I am a recent CS graduate from the University of New Mexico (UNM) working as a software developer at the New Mexico Environment Department. Previously, I built a website from scratch for the Great Plains Partners Venture Group startup and also completed a software engineering internship at New Mexico Administrative Office of the District Attorneys. Before that, I did research projects at UNM, Stanford and Purdue, working in different areas of computer science such as robotics, IoT and deep learning.</p>
      <br />
      <p className="additional_info"><span className="bold">Interests</span> – Frontend development, full stack development, UI/UX</p>
      <p className="additional_info"><span className="bold">Proficient</span> – HTML, CSS (SASS/LESS), JavaScript (React, Angular, Node), Python (Flask), SQL</p>
      <p className="additional_info"><span className="bold">Tools</span> – AWS, Git, Netlify, Vercel, VS Code</p>
      <br />

      <a href={Resume} target="_blank" className="resume"><span className="highlighted">Resume</span></a>
    </div>
  )
}

export default About
