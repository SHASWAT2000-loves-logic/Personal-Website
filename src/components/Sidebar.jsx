// Sidebar component is the left side navbar of the website, which is positioned fixed. 

import {Link} from "react-scroll"

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul className="navbar">
          <img src={require("../images/Personal_Photo.png")} alt="Something went wrong" />
          <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={1000}>About</Link></li>
          <li><Link activeClass="active" to="education" spy={true} smooth={true} offset={0} duration={1000}>Education</Link></li>
          <li><Link activeClass="active" to="experience" spy={true} smooth={true} offset={0} duration={1000}>Experience</Link></li>
          <li><Link activeClass="active" to="news" spy={true} smooth={true} offset={0} duration={1000}>News</Link></li>
          <li><Link activeClass="active" to="awards" spy={true} smooth={true} offset={0} duration={1000}>Awards</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1000}>Contact</Link></li>
         
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
