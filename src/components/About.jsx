// About component contains the content in the about section of the website

import {FaLinkedin, FaGithub} from "react-icons/fa"
import Resume from "../Resume/Shukla_Shaswat_Resume.pdf"
function About() {
  return (
    <div className="about_section" id="about">
      <h1 className="bold_name">Shaswat Shukla</h1>
      <p className="short_intro">Undergraduate CS student @ University of New Mexico</p>
      <a href="http://linkedin.com/in/shaswat-shukla/" target="_blank"><FaLinkedin className="about_icons"/></a>
      <a href="https://github.com/SHASWAT2000-loves-logic" target="_blank"><FaGithub className="about_icons"/></a> 
      <p>I am currently a 4<sup>th</sup> year computer science student at the University of New Mexico. I have prior experience in building web applications using HTML, CSS and JavaScript. I have used various CSS frameworks like Bootstrap, Materialize CSS, Tailwind CSS etc to build UIs. I am also familiar with using CSS preprocessor Sass (Syntactically Awesome Style Sheets) for styling HTML elements. My go to front-end framework is React (even this personal website is created using React). For the back-end, I am experienced with NodeJS, Express and MySQL. For deploying web applications, I have previously used AWS, Netlify and Vercel. </p>
      <br />
      <p>Apart from web technologies, I have experience using Python and its libraries like NumPy, SciPy and MatplotLib. Recently, I also had the opportunity to gain some experience in machine learning as well, where I mostly used TensorFlow for training models.</p>
      <br />
      <p className="opportunities">Currently, I am looking for full-time job opportunities in web development to apply my knowledge on real-world projects and gain new and valuable experience in my field. </p>
      <a href={Resume} target="_blank" className="resume"><span className="highlighted">Resume</span></a>
    </div>
  )
}

export default About
