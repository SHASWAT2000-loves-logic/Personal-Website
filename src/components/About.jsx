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
      <p>I am a second-year MSCS student at Purdue with one year of full-time work experience as a software engineer. In my short professional journey, I have built a company website for a startup, maintained legacy applications for a state government, and am currently redesigning and developing the website of an edtech company. In addition to my industry experience, I have considerable research experience as well. As an undergraduate, I was twice a summer intern at Purdue—working on multi-robot systems during the first summer, and building a "robotic" bicycle crank with sensing and computational capabilities to accurately measure cyclist performance during the second summer. I also interned at Stanford University as part of the NASA ULI program, where I developed an algorithm for autonomous robot navigation through a driving course consisting of static obstacles.</p>
      <br />
      <p className="additional_info"><span className="bold">Interests</span> – Software Engineering, full stack development, UI/UX</p>
      <p className="additional_info"><span className="bold">Proficient</span> – HTML, CSS (SASS/LESS, Bootstrap, Material UI), JavaScript (React, Angular, Node), Python (Django, Flask), Java, MySQL, MongoDB</p>
      <p className="additional_info"><span className="bold">Tools</span> – AWS, Git, Linux, Docker, Kubernetes, Webpack, Babel, Netlify, VS Code</p>
      <br />

      <a href={Resume} target="_blank" className="resume"><span className="highlighted">Resume</span></a>
    </div>
  )
}

export default About
