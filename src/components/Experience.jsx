// Experience component contains the content in the experience section of the website


import {SiGooglemaps} from "react-icons/si"
import {FaUniversity} from "react-icons/fa"
import {BsFillCalendar2MinusFill} from "react-icons/bs"
function Experience() {
  return (
    <div className="experience_section" id="experience">
      <h1>Experience</h1>

      <div className="card">
        <div className="card_grid">
          <div className="position">Software Developer 1</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Santa Fe, NM</div>
          <div className="company"><FaUniversity className="card_icon"/> New Mexico State Environment</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Mar. 2023 – Present</div>
        </div>
        <ul className="position_description">
          <li>Building <span className="bold">websites</span> and <span className="bold">applications</span> for internal use and for the people of New Mexico</li>
          <li>Technologies used: <span className="bold">HTML</span>, <span className="bold">CSS</span>, <span className="bold">Vanilla JavaScript</span>, <span className="bold">Node</span>, <span className="bold">Express</span></li>
        </ul>
      </div>
      <div className="card">
        <div className="card_grid">
          <div className="position">Front End Developer</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Manhattan, KS</div>
          <div className="company"><FaUniversity className="card_icon"/> Great Plains Partners Ventures Group</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Feb. 2023 – Mar. 2023</div>
        </div>
        <ul className="position_description">
          <li><span className="bold">Built</span> and <span className="bold">deployed</span> a <span className="bold">responsive</span> multi page website of the company</li>
          <li>Website link: <a href="https://greatplainsventures.com/" target="_blank"><span className="main_color">Great Plains Partners Ventures Group</span> </a></li>
          <li>Technologies used: <span className="bold">React</span>, <span className="bold">Netlify</span></li>
        </ul>
      </div>
      <div className="card">
        <div className="card_grid">
          <div className="position">Software Developer Intern</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Albuquerque, NM</div>
          <div className="company"><FaUniversity className="card_icon"/> New Mexico Administrative Office of the District Attorneys</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Sep. 2022 – Dec. 2022</div>
        </div>
        <ul className="position_description">
          <li><span className="bold">Developed</span> a <span className="bold">web application</span> to streamline and digitalize the procurement and requisition process from paper forms to electronic forms</li>
          <li><span className="bold">Created</span> an interactive dashboard for users to access all the required forms at one place</li>
          <li>Technologies used: <span className="bold">React</span>, <span className="bold">PostgreSQL</span>, <span className="bold">Bootswatch</span></li>
        </ul>
      </div>

      <div className="card">
        <div className="card_grid">
          <div className="position">Undergraduate Research Assistant</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Albuquerque, NM</div>
          <div className="company"><FaUniversity className="card_icon"/>University of New Mexico</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Sep. 2022 – Dec. 2022</div>
        </div>
        <ul className="position_description">
          <li>Worked on a <span className="bold">novel</span> method to transform ceramic 3-D printers intp printing clay products</li>
          <li> <span className="bold">Debugged</span> <a href="https://ecraft2learn.github.io/uui/beetleblocks/" target="_blank"><span className="main_color">Beetle Blocks</span> </a>, a JavaScript application for 3D design and fabrication, to search for the data structure that stores the path (coordinates) of 3D shapes during design</li>
        </ul>
      </div>


      <div className="card">
        <div className="card_grid">
          <div className="position">Research Intern</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Palo Alto, CA</div>
          <div className="company"><FaUniversity className="card_icon"/> Stanford University</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Aug. 2022 – Aug. 2022</div>
        </div>
        <ul className="position_description">
          <li>Project – <span className="bold">Vision</span> Based Navigation in TurtleBots (Supervisors- Dr. Marco Pavone and Dr. Shreyas Kousik)</li>
          <li><span className="bold">Collected</span> training data from TurtleBot cameras using <span className="bold">Rosbag</span> at 5 frames/sec</li>
          <li>Used a pretrained vgg 16 <span className="bold">tensorflow model</span>  to create a Convolutional Neural Network for <span className="bold">image classification</span>  to detect static obstacles in path</li>
          <li>CNN model <span className="bold">enabled</span>  the TurtleBot to make <span className="bold">80%</span>  correct decisions while autonomously navigating through a driving course</li>
          <li>Technologies used: <span className="bold">Python</span>, <span className="bold">TensorFlow</span>, <span className="bold">OpenCV</span>, <span className="bold">ROS</span>, <span className="bold">Linux</span></li>
        </ul>
      </div>


      <div className="card">
        <div className="card_grid">
          <div className="position">Summer Intern</div>
          <div className="location"><SiGooglemaps className="card_icon"/>West Lafayette, IN</div>
          <div className="company"><FaUniversity className="card_icon"/>Purdue University</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>May 2022 – July 2022</div>
        </div>
        <ul className="position_description">
          <li>Project – Form + Function 4-D Printing (Supervisor - Dr. Richard Voyles)</li>
          <li>Explored a <span className="bold">novel</span>  mechanism to <span className="bold">model</span>  a bicyclist performance by using a robotic bicycle crank</li>
          <li><span className="bold">Created</span>  CAD model of a customized bicycle crank for 3-D printing and externally <span className="bold">embedded</span>  electrical components to calculate resistance change in the bicycle crank during motion</li>
          <li><span className="bold">Developed</span> a <span className="bold">webpage</span> to display the resistance change in the bicycle based on amount of stress on the crank</li>
        </ul>
      </div>
    

      <div className="card">
        <div className="card_grid">
          <div className="position">Computer Consultant</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Albuquerque, NM</div>
          <div className="company"><FaUniversity className="card_icon"/>University of New Mexico</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Aug. 2021 – Dec. 2021</div>
        </div>
        <ul className="position_description">
          <li><span className="bold">Responded</span> to intermediate to complex PC software problems in accordance with service level requirement</li>
          <li><span className="bold">Performed</span> computer hardware diagnostic, troubleshooting operating systems and internet connection issues</li>
          <li><span className="bold">Assisted</span> and <span className="bold">trained</span> students and faculty on how to run wide variety of software on Windows and Mac computing environments</li>
        </ul>
      </div>


      <div className="card">
        <div className="card_grid">
          <div className="position">Summer Intern</div>
          <div className="location"><SiGooglemaps className="card_icon"/>West Lafayette, IN</div>
          <div className="company"><FaUniversity className="card_icon"/>Purdue University</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>May 2021 – July 2021</div>
        </div>
        <ul className="position_description">
          <li>Project- <span className="bold">Algorithms</span> for Resilient Coordination and Situational Awareness in Swarm <span className="bold">Robotics</span> (Supervisor- Dr. Shreyas Sundaram)</li>
          <li>Wrote <span className="bold">Python</span> scripts for simulating various task allocation algorithms used for assigning tasks to robots</li>
          <li>Used <span className="bold">NumPy</span>, <span className="bold">SciPy</span> and <span className="bold">MatplotLib</span> packages to create and visualize coordination in networks of robots in a simulated environment </li>
          <li><span className="bold">Created</span> a Python simulation to <span className="bold">analyze</span> and plot the time taken by the robots to agree on tasks using consensus algorithms in a discrete time model</li>
         </ul>
      </div>


      <div className="card">
        <div className="card_grid">
          <div className="position">STEM Tutor</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Albuquerque, NM</div>
          <div className="company"><FaUniversity className="card_icon"/>University of New Mexico</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Jan. 2021 – Dec. 2022</div>
        </div>
        <ul className="position_description">
          <li><span className="bold">Tutored</span> Java, Python, Calculus I, II, III and General Physics I and II</li>
          <li><span className="bold">Assisted</span> students with homework, problem sets and programming assignments</li>
          <li><span className="bold">Enhanced</span> tutoring skills through weekly trainings and feedback</li>
        </ul>
      </div>

    </div>
  )
}

export default Experience
