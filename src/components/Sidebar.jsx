// Sidebar component is the left side navbar of the website, which is positioned fixed. 

import {Link} from "react-scroll"
function Sidebar() {
  
  return (

    <div className="sidebar">
      <nav>
        <ul className="navbar" id="top_navbar">
          {/* personal image */}
          <img src={require("../images/Personal_Photo.png")} alt="Something went wrong" />
          {/* link to about section */}
          <li><Link activeClass="active_link" to="about" spy={true} offset={-130} duration={1000} className="about_link">About</Link></li>
          {/* link to education section */}
          <li><Link activeClass="active_link" to="education" spy={true} offset={-80} duration={1000} className="education_link">Education</Link></li>
          {/* link to experience section */}
          <li><Link activeClass="active_link" to="experience" spy={true} offset={-80} duration={1000} className="experience_link">Experience</Link></li>
          {/* link to news section */}
          <li><Link activeClass="active_link" to="news" spy={true} offset={-80} duration={1000} className="news_link">News</Link></li>
          {/* link to awards section */}
          <li><Link activeClass="active_link" to="awards" spy={true} offset={-80} duration={1000} className="awards_link">Awards</Link></li>
          {/* link to contact section */}
          <li><Link activeClass="active_link" to="contact" spy={true} offset={-80} duration={1000} className="contact_link">Contact</Link></li>

        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
