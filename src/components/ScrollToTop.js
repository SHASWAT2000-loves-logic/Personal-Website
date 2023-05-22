// This component displays the button, which when clicked takes the user to the top of the page

import { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollToTop() {
  // monitors whether the scroll to top button is visible or not. Initially it is not visible.

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    // stores where the user is at on the Y axis

    const scrolled = document.documentElement.scrollTop;

    // scroll to top button is displayed when user is at 801px on the Y-axis, otherwise the button is not displayed

    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  };

  // this function is called when the user clicks on the scroll to top button

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // listens for the scroll event or whenever the user is scrolling on the page

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <FaArrowAltCircleUp
        className="scroll_top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }} // depending on the scroll position, the button is either displayed or not
      />
    </div>
  );
}

export default ScrollToTop;
