// Education component contains the content in the education section of the website

import {FaUniversity} from "react-icons/fa"
function Education() {
  return (
    <div className="education_section" id="education">
      <h1>Education</h1>
      <div className="edu_flex">
       <h3><FaUniversity className="edu_icon"/> Purdue University | West Lafayette, IN</h3>
       <p>August 2024 – May 2026 (Expected)</p>
      </div>
      <div className="edu_content">
        <p>Master of Science (M.S) in Computer Science</p>
        <ul className="edu_list">
          <li>GPA – N/A</li>
        </ul>
      </div>
      <div className="course_content">
        <h3>Relevant Coursework – </h3>
        <p>Computer Networks | Human-Robot Interaction</p>
      </div>
      <div className="edu_flex">
       <h3><FaUniversity className="edu_icon"/> University of New Mexico | Albuquerque, NM</h3>
       <p>January 2019 – December 2022</p>
      </div>
      <div className="edu_content">
        <p>Bachelor of Science (B.S) in Computer Science</p>
        <ul className="edu_list">
          <li>GPA – 3.97/4.0</li>
          <li>Minor – Mathematics</li>
        </ul>
      </div>
      <div className="course_content">
        <h3>Relevant Coursework – </h3>
        <p>Software Engineering | Data Structure and Algorithms | Operating Systems | Scientific Computing | Computer Networks | Cybersecurity | Computer Architecture | Numerical Computing</p>
      </div>
    </div>
  )
}

export default Education
