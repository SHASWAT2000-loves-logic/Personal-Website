// This component comes into play only on mobile devices or screen sizes in between 320px and 480px

// Used react-burger-menu package to showcase a burger menu to navigate through the webpage
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
function MobileNavbar() {
  // to check whether the sidebar is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // to track the state of the sidebar - whether it is open or closed
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // to close the hamburger menu when the user clicks on a link
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      width={"150px"}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      noOverlay
    >
      <a href="#about" className="menu_item" onClick={closeSidebar}>
        About
      </a>
      <a href="#education" className="menu_item" onClick={closeSidebar}>
        Education
      </a>
      <a href="#experience" className="menu_item" onClick={closeSidebar}>
        Experience
      </a>
      <a href="#news" className="menu_item" onClick={closeSidebar}>
        News
      </a>
      <a href="#awards" className="menu_item" onClick={closeSidebar}>
        Awards
      </a>
      <a href="#contact" className="menu_item" onClick={closeSidebar}>
        Contact
      </a>
    </Menu>
  );
}

export default MobileNavbar;
