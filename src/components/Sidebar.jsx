// Sidebar component is the left side navbar of the website, which is positioned fixed. 

import {useState} from "react"
import {Link} from "react-scroll"

function Sidebar() {

  // we have 5 states for links to each individual component

  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);
  
   // By checking the scroll position of the user, we will highlight the link to the component the user is in

  const changeNavbarColor =() =>{
    // user in about section
    if(window.scrollY>0 && window.scrollY<=570){
      setLink1(true);
      setLink2(false);
      setLink3(false);
      setLink4(false);
      setLink5(false);
    }
    // user in education section
    else if(window.scrollY>680 && window.scrollY<1070){
      setLink1(false);
      setLink2(true);
      setLink3(false);
      setLink4(false);
      setLink5(false);
    }
    //user in experience section
    else if(window.scrollY>=1070 && window.scrollY<3300){
      setLink1(false);
      setLink2(false);
      setLink3(true);
      setLink4(false);
      setLink5(false);
    }
    // user in news and updates section
    else if(window.scrollY>=3300 && window.scrollY<3950){
      setLink1(false);
      setLink2(false);
      setLink3(false);
      setLink4(true);
      setLink5(false);
    }
    //user in awards section
    else if(window.scrollY>=3950){
      setLink1(false);
      setLink2(false);
      setLink3(false);
      setLink4(false);
      setLink5(true);
    }
  }

  // event listner to handle the scroll event.  

  window.addEventListener("scroll", changeNavbarColor);
  
  return (
    <div className="sidebar">
      <nav>
        <ul className="navbar">
          <img src={require("../images/Personal_Photo.png")} alt="Something went wrong" />
          <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={1000} className={`${link1 && "active_link"}`}>About</Link></li>
          <li><Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={1000} className={`${link2 && "active_link"}`}>Education</Link></li>
          <li><Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={1000} className={`${link3 && "active_link"}`}>Experience</Link></li>
          <li><Link activeClass="active" to="news" spy={true} smooth={true} offset={-50} duration={1000} className={`${link4 && "active_link"}`}>News</Link></li>
          <li><Link activeClass="active" to="awards" spy={true} smooth={true} offset={-50} duration={1000} className={`${link5 && "active_link"}`}>Awards</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
