// Experience component contains the content in the experience section of the website


import {SiGooglemaps} from "react-icons/si"
import {FaUniversity} from "react-icons/fa"
import {BsFillCalendar2MinusFill} from "react-icons/bs"
function Experience() {
  return (
    <div className="experience_section" id="experience">
      <h1>Experience</h1>

    {/* First experience */}

      <div className="card">
        <div className="card_grid">
          <div className="position">Research Intern (Computer Vision)</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Palo Alto, CA</div>
          <div className="company"><FaUniversity className="card_icon"/> Stanford University</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Aug. 2022 - Aug. 2022</div>
        </div>
        <ul className="position_description">
          <li>One of 9 students selected to participate in the NASA ULI Program</li>
          <li>Project – “<span className="bold">Vision</span> Based Navigation in TurtleBots” (Supervisors- Dr. Marco Pavone and Dr. Shreyas Kousik)</li>
          <li><span className="bold">Recorded</span> 10000 images from three TurtleBot cameras using <span className="bold">Rosbag</span> at <span className="bold">5 frames/sec</span></li>
          <li><span className="bold">Collaborated</span> in a team of <span className="bold">3</span> to <span className="bold">train</span> and <span className="bold">deploy</span> a Convolutional Neural Network <span className="bold">(CNN) model</span> to allow the TurtleBot to autonomously navigate through a path of static obstacles</li>
          <li>The CNN model was <span className="bold">tested</span> to an <span className="bold">accuracy</span> of <span className="bold">80%</span> after using it on validation data</li>
          <li>Technologies used: <span className="bold">Python</span>, <span className="bold">TensorFlow</span>, <span className="bold">Keras</span>, <span className="bold">ROS</span>, <span className="bold">Linux</span></li>
        </ul>
      </div>

      {/* Second experience */}

      <div className="card">
        <div className="card_grid">
          <div className="position">Summer Research Intern</div>
          <div className="location"><SiGooglemaps className="card_icon"/>West Lafayette, IN</div>
          <div className="company"><FaUniversity className="card_icon"/>Purdue University</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>May 2022 - July 2022</div>
        </div>
        <ul className="position_description">
          <li>One of 8 students selected to participate in the SIRI program</li>
          <li>Project – “Form + Function 4-D Printing” (Supervisor - Dr. Richard Voyles)</li>
          <li>Created CAD model of an <span className="bold">IoT</span> based, "<span className="bold">smart</span>" bicycle crank using <span className="bold">Autodesk Fusion 360</span></li>
          <li>Externally <span className="bold">embedded</span> electrical components in bicycle crank for functionality using pick and place method</li>
          <li><span className="bold">Debugged</span> the custom <span className="bold">C#</span> application to improve the efficiency of G-code used for 3-D printing silver extrusion</li>
          <li><span className="bold">Developed</span> a single page application (<span className="bold">SPA</span>) to display the resistance change in the bicycle crank using <span className="bold">HTML</span>, <span className="bold">CSS</span> and <span className="bold">Vanilla JavaScript</span></li>
        </ul>
      </div>
    
      {/* Third experience */}

      <div className="card">
        <div className="card_grid">
          <div className="position">Computer Consultant</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Albuquerque, NM</div>
          <div className="company"><FaUniversity className="card_icon"/>University of New Mexico</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Aug. 2021 - Dec. 2021</div>
        </div>
        <ul className="position_description">
          <li><span className="bold">Responded</span> to intermediate to complex PC software problems in accordance with service level requirement</li>
          <li><span className="bold">Performed</span> computer hardware diagnostic, troubleshooting operating systems and internet connection issues</li>
          <li><span className="bold">Assisted</span> and <span className="bold">trained</span> students and faculty on how to run wide variety of software on Windows and Mac computing environments</li>
          <li>Carried out routine sofwtare checks and hardware repairs as required</li>
        </ul>
      </div>

        {/* Fourth experience */}

      <div className="card">
        <div className="card_grid">
          <div className="position">Summer Research Intern</div>
          <div className="location"><SiGooglemaps className="card_icon"/>West Lafayette, IN</div>
          <div className="company"><FaUniversity className="card_icon"/>Purdue University</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>May 2021 - July 2021</div>
        </div>
        <ul className="position_description">
          <li>One of 11 students selected to participate in the SIRI program</li>
          <li>Project- “<span className="bold">Algorithms</span> for Resilient Coordination and Situational Awareness in Swarm <span className="bold">Robotics</span>” (Supervisor- Dr. Shreyas Sundaram)</li>
          <li>Wrote <span className="bold">Python</span> scripts for simulating various task allocation algorithms used for assigning tasks to robots</li>
          <li>Used <span className="bold">NetworkX</span>, <span className="bold">NumPy</span>, <span className="bold">SciPy</span> and <span className="bold">MatplotLib</span> packages in Python to create and visualize coordination in networks of robots in a simulated environment </li>
          <li><span className="bold">Created</span> a Python simulation to <span className="bold">analyze</span> and plot the time taken by the robots to agree on tasks using consensus algorithms in a discrete time model</li>
         </ul>
      </div>

        {/* Fifth experience */}

      <div className="card">
        <div className="card_grid">
          <div className="position">Physics and Math Tutor</div>
          <div className="location"><SiGooglemaps className="card_icon"/>Albuquerque, NM</div>
          <div className="company"><FaUniversity className="card_icon"/>University of New Mexico</div>
          <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>Jan. 2021 - Present</div>
        </div>
        <ul className="position_description">
          <li><span className="bold">Tutored</span> Calculus I, II, III and General Physics I and II</li>
          <li><span className="bold">Assisted</span> students with homework</li>
          <li>Went over quiz problems with students</li>
          <li><span className="bold">Enhanced</span> tutoring skills through weekly trainings and feedback</li>
        </ul>
      </div>

    </div>
  )
}

export default Experience
