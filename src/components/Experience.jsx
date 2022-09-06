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
                <li>Project – “Vision Based Navigation in TurtleBots”</li>
                <li>Recorded images from TurtleBot cameras using Rosbag at 5 frames/sec  </li>
                <li>Collaborated in a team of 3 to create a Convolutional Neural Network (CNN) model with an accuracy of 80%</li>
                <li>Technologies used: Python, TensorFlow, ROS, Linux </li>
           </ul>
        </div>

         {/* Second experience */}

        <div className="card">
            <div className="card_grid">
                <div className="position">Summer Research Intern</div>
                <div className="location"><SiGooglemaps className="card_icon"/>West Lafayetter, IN</div>
                <div className="company"><FaUniversity className="card_icon"/>Purdue University</div>
                <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>May 2022 - July 2022</div>
            </div>
           <ul className="position_description">
                <li>IoT based project – “Form + Function 4-D Printing”</li>
                <li>Created CAD model of a “smart” bicycle crank using Autodesk Fusion 360</li>
                <li>Externally embedded electrical components in bicycle crank for functionality using pick and place method</li>
                <li>Developed the webpage section of the Arduino program using HTML, CSS and Vanilla JavaScript</li>
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
                <li>Responded to intermediate to complex PC software problems in accordance with service level requirement</li>
                <li>Performed computer hardware diagnostic, troubleshooting operating systems and internet connection issues</li>
                <li>Provided assistance and training on a wide variety of software to students and faculty on Windows and Mac computing environments</li>
           </ul>
        </div>

         {/* Fourth experience */}

        <div className="card">
            <div className="card_grid">
                <div className="position">Summer Research Intern</div>
                <div className="location"><SiGooglemaps className="card_icon"/>West Lafayetter, IN</div>
                <div className="company"><FaUniversity className="card_icon"/>Purdue University</div>
                <div className="dates"><BsFillCalendar2MinusFill className="card_icon"/>May 2021 - July 2021</div>
            </div>
           <ul className="position_description">
                <li>Project- “Algorithms for Resilient Coordination and Situational Awareness in Swarm Robotics”</li>
                <li>Wrote Python scripts for simulating various task allocation algorithms used for assigning tasks to robots</li>
                <li>Used NetworkX, NumPy, SciPy and MatplotLib packages in Python to create and visualize coordination in networks of robots in a simulated environment </li>
                <li>Created and deployed a MATLAB simulation to analyze and plot the time taken by the robots to agree on tasks using consensus algorithms in a discrete time model</li>
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
                <li>Tutored Calculus I, II, III and General Physics I and II</li>
                <li>Assisted students with homework</li>
                <li>Went over quiz problems with students</li>
                <li>Enhanced tutoring skills through weekly-trainings and feedback</li>
           </ul>
        </div>

    </div>
  )
}

export default Experience
