// Sidebar component is the left side navbar of the website, which is positioned fixed. 

import {Link} from "react-scroll"

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul className="navbar" id="top_navbar">
          <img src={require("../images/Personal_Photo.png")} alt="Something went wrong" />
          <li><Link activeClass="active_link" to="about" spy={true} smooth={true} offset={-80} duration={1000} className="about_link">About</Link></li>
          <li><Link activeClass="active_link" to="education" spy={true} smooth={true} offset={-80} duration={1000} className="education_link">Education</Link></li>
          <li><Link activeClass="active_link" to="experience" spy={true} smooth={true} offset={-80} duration={1000} className="experience_link">Experience</Link></li>
          <li><Link activeClass="active_link" to="news" spy={true} smooth={true} offset={-80} duration={1000} className="news_link">News</Link></li>
          <li><Link activeClass="active_link" to="awards" spy={true} smooth={true} offset={-80} duration={1000} className="awards_link">Awards</Link></li>
          <li><Link activeClass="active_link" to="contact" spy={true} smooth={true} offset={-80} duration={1000} className="contact_link">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
