// Awards component contains the content in the awards section of the website

import {FaMedal} from "react-icons/fa"
function Awards() {
  return (
    <div className="awards_section" id="awards">
      <h1>Awards &amp; Honors</h1>
      <p><FaMedal className="award_icon"/><span className="highlighted">Selected </span>to participate in the prestigious Cornell, Maryland, Max Planck Pre-Doctoral Research School (CMMRS) in Computer Science in Saarbrücken, Germany</p>
      <p><FaMedal className="award_icon"/><span className="highlighted">Summa Cum Laude </span>(2022); graduated with the highest honors of having 3.9+ cumulative GPA upon graduation</p>
      <p><FaMedal className="award_icon"/><span className="highlighted">Dean's List </span>(2019-2022); for 3.5+ GPA every semester</p>
      <p><FaMedal className="award_icon"/><span className="highlighted">Engineering Student Success Scholarship </span>at University of New Mexico (2020-2021); $500 per semester</p>
      <p><FaMedal className="award_icon"/><span className="highlighted">Selected </span>to participate in the Quantum Undergraduate Research Experience at the University of New Mexico (2021 &amp; 2022) (declined)</p>
      <p><FaMedal className="award_icon"/><span className="highlighted">Amigo Scholarship </span>at the University of New Mexico (2019-2022); covers $16000 per semester in tuition</p>
    </div>
  )
}

export default Awards
