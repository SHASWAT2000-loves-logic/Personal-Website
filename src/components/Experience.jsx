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
          <div className="position">Software Engineer Intern</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Cabot, AR</div>
          <div className="company"><FaUniversity className="card_icon"/> Shurley Instructional Materials</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>May 2025 – Present</div>
        </div>
        <ul className="position_description">
          <li>Designing and building a new website using HTML, CSS, JavaScript and JSP</li>          
        </ul>
      </div>
      <div className="card">
        <div className="card_grid">
          <div className="position">Graduate Teaching Assistant</div>
          <div className="location"><SiGooglemaps className="card_icon"/>West Lafayette, IN</div>
          <div className="company"><FaUniversity className="card_icon"/> Purdue University</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Aug. 2024 – Present</div>
        </div>
        <ul className="position_description">
          <li>Graduate Teaching Assistant <span className="bold">(GTA)</span> for CS 159 - Programming Applications for Engineers - an introductory course in C programming language</li>
          <li>Conducting <span className="bold">weekly lab session of 30 students</span>, providing guidance to students for labs and lab quizzes</li>
          <li>Grading <span className="bold">programming assignments and homework</span> according to class rubric and guidelines</li>
          <li>Holding <span className="bold">online and offline office hours</span> to help students and provided feedback on submitted assignments</li>
        </ul>
      </div>

      <div className="card">
        <div className="card_grid">
          <div className="position">Software Development Engineer 1</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Santa Fe, NM</div>
          <div className="company"><FaUniversity className="card_icon"/> New Mexico State Environment</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Mar. 2023 – Feb. 2024</div>
        </div>
        <ul className="position_description">
          <li>Built a <span className="bold">responsive</span> single page JavaScript <span className="bold">application</span> to display pollution levels across New Mexico in a tabular format by <span className="bold">fetching</span> data from a <span className="bold">RESTful API</span></li>
          <li><span className="bold">Created</span> a PHP <span className="bold">application</span> that <span className="bold">recursively</span> scans <span className="bold">CSV</span> files for defaulters in online payments for pollution certificates </li>
          <li>Managed and <span className="bold">maintained legacy applications</span> in PHP, ensuring continued functionality and incorporating enhancements as needed </li>
          <li>Technologies used: <span className="bold">HTML</span>, <span className="bold">CSS</span>, <span className="bold">Vanilla JavaScript</span>, <span className="bold">Node</span>, <span className="bold">Express</span></li>
        </ul>
      </div>
      <div className="card">
        <div className="card_grid">
          <div className="position">Web Developer</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Remote</div>
          <div className="company"><FaUniversity className="card_icon"/> Great Plains Partners Ventures Group</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Feb. 2023 – Mar. 2023</div>
        </div>
        <ul className="position_description">
          <li><span className="bold">Independently</span> designed and <span>developed</span> a <span className="bold">responsive multi-page website</span> from scratch using <span className="bold">HTML, CSS</span> and <span className="bold">React</span></li>
          <li>Managed the entire <span className="bold">web development lifecycle</span>, from initial concept to final <span className="bold">deployment</span> on <span className="bold">Netlify</span>, ensuring seamless
          functionality and <span className="bold">user experience</span></li>
          <li><span className="bold">Utilized Chrome DevTools</span> to conduct <span className="bold">cross-device testing</span>, ensuring consistent <span className="bold">user experience</span> across all platforms</li>
          <li>Website link: <a href="https://greatplainsventures.com/" target="_blank"><span className="main_color">Great Plains Partners Ventures Group</span> </a></li>
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
          <li><span className="bold">Enhanced user experience</span> of the e-forms by implementing <span className="bold">dynamic error messaging</span>, providing users with clear,
          real-time feedback and actionable solutions</li>
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
          <li>Worked on a <span className="bold">novel</span> method to transform ceramic 3D printers into printing clay products</li>
          <li> <span className="bold">Debugged</span> <a href="https://ecraft2learn.github.io/uui/beetleblocks/" target="_blank"><span className="main_color">Beetle Blocks</span> </a>, a JavaScript application for 3D design and fabrication, to search the data structure that stores the path (coordinates) of 3D shapes during design</li>
        </ul>
      </div>


      <div className="card">
        <div className="card_grid">
          <div className="position">Research Intern</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Palo Alto, CA</div>
          <div className="company"><FaUniversity className="card_icon"/> Stanford University</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Jul. 2022 – Aug. 2022</div>
        </div>
        <ul className="position_description">
          <li>Project – <span className="bold">Vision</span> Based <span className="bold">Navigation</span> in TurtleBots (Supervisor- Dr. Marco Pavone @ Autonomous Systems Lab)</li>
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
          <li>Project – Form + Function 4-D Printing (Supervisor - Dr. Richard Voyles @ Collaborative Robotics Lab)</li>
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
          <li><span className="bold">Assisted</span> students both one-on-one and in groups with homework, problem sets and programming assignments</li>
          <li><span className="bold">Enhanced</span> tutoring skills through weekly trainings and feedback</li>
        </ul>
      </div>

    </div>
  )
}

export default Experience
