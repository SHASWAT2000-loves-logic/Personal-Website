import {FaLinkedin, FaGithub} from "react-icons/fa"
// import {SiGmail} from "react-icons/si"
function About() {
  return (
    <div className="about_section">
      <h1>Shaswat Shukla</h1>
      {/* Maybe add email here and remove contact me section */}
      <p className="short_intro">Undergraduate CS student @ University of New Mexico</p>
      <a href="#" ><FaLinkedin className="about_icons"/></a>
      <a href="#"><FaGithub className="about_icons"/></a> 
      <p>I am currently a 4th year computer science student at the University of New Mexico. I have prior experience in building web applications using HTML, CSS and JavaScript. I have experience using various CSS frameworks like Bootstrap, Materialize CSS, Skeleton CSS, Tailwind CSS etc. I am also familiar with CSS preprocessor Sass (Syntactically Awesome Style Sheets). On the backend, I am familiar with Node.js, Express.js and MySQL. For deploying web applications, I have previously used Netlify and Vercel. </p>
      <br />
      <p>Apart from web technologies, I have experience using Python and its libraries like NumPy, SciPy and MatplotLib. Recently, I also had the opportunity to gain some experience in machine learning as well, where I mostly used TensorFlow for training models.</p>
      <br />
      <p>Currently, I am looking for full-time job opportunities in web development to apply my knowledge on real-world projects and gain new and valuable experience in my field. </p>
      {/* Add the resume here */}
    </div>
  )
}

export default About
