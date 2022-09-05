
function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul className="navbar">
          <img src={require("../images/Personal_Photo.png")} alt="Something went wrong" />
          <li><a href="#">About</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Honors and Awards</a></li>
          <li><a href="#">Other Interests</a></li>
          <li><a href="#">Contact Me</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
