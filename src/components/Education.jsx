
import {FaUniversity} from "react-icons/fa"
function Education() {
  return (
    <div className="education_section">
      <h1>Education</h1>
      <div className="edu_flex">
       <h3><FaUniversity className="edu_icon"/> University of New Mexico, Albuquerque, NM</h3>
       <p>Expected graduation - December 2022</p>
      </div>
      <div className="edu_content">
        <p>Bachelor of Science (B.S) in Computer Science</p>
        <ul className="edu_list">
          <li>Minor in Mathematics</li>
          <li>GPA - 3.98/4.00</li>
        </ul>
      </div>
    </div>
  )
}

export default Education
