// This component comes into play only on mobile devices or screen sizes in between 320px and 480px

import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-scroll";

function MobileNavbar() {
  /*
  1. To check whether hamburger menu is opened or closed
  2. When the hamburger button is clicked, the 3 horizontal lines convert to an "X" 
  3. When the "X" is clicked, it reverts back to the hamburger menu

  */
  const [isOpen, setOpen] = useState(false);

  // when the user clicks on a link, the navbar disappears and "X" goes back to hamburger menu (3 horizontal lines)
  // this function is called when the user clicks on one of the sub components

  const deleteNavbar = () => {
    document.getElementById("mobile_links").style.display = "none";
    setOpen((open) => !open);
  };

  // initially the hamburger menu is not clicked and is "open"

  if (!isOpen) {
    return (
      <div className="mobile_navbar">
        <div className="mobile_navbar_flex">
          <p>Shaswat Shukla</p>
          <div className="hamburger_icon">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
              color="#fff"
              size={25}
              duration={1}
            />
          </div>
        </div>
      </div>
    );
  }

  // when the hamburger button is clicked, it becomes "closed" and converts to "X".
  // displays the vertical navbar
  else {
    return (
      <div className="mobile_navbar">
        <div className="mobile_navbar_flex">
          <p>Shaswat Shukla</p>
          <div className="hamburger_icon">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
              color="#fff"
              size={25}
              duration={1}
            />
          </div>
        </div>

        {/* displaying the links in a vertical navbar */}

        <nav id="mobile_links">
          <ul>
            <li>
              <Link
                activeClass="active_link"
                to="about"
                spy={true}
                offset={-120}
                duration={1000}
                onClick={deleteNavbar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active_link"
                to="education"
                spy={true}
                offset={-80}
                duration={1000}
                onClick={deleteNavbar}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                activeClass="active_link"
                to="experience"
                spy={true}
                offset={-80}
                duration={1000}
                onClick={deleteNavbar}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active_link"
                to="news"
                spy={true}
                offset={-80}
                duration={1000}
                onClick={deleteNavbar}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                activeClass="active_link"
                to="awards"
                spy={true}
                offset={-80}
                duration={1000}
                onClick={deleteNavbar}
              >
                Awards
              </Link>
            </li>
            <li>
              <Link
                activeClass="active_link"
                to="contact"
                spy={true}
                offset={-80}
                duration={1000}
                onClick={deleteNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MobileNavbar;
