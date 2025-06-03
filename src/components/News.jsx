// This is the news component

import {BiCalendar} from "react-icons/bi"

function News() {
  return (
    <div className="news_section" id="news">
      <h1>News &amp; Updates</h1>

      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>May 2025</h3>
        </div>
        <div className="news_content">
          <p>Started as software engineer intern at Shurley Instructional Materials</p>
        </div>
      </div>
      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>March 2025</h3>
        </div>
        <div className="news_content">
          <p>Accepted to the Cornell, Maryland, Max Planck Pre-Doctoral Research School (CMMRS) 2025 in Computer Science</p>
        </div>
      </div>
      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>Aug 2024</h3>
        </div>
        <div className="news_content">
          <p>Started a new position as Graduate Teaching Assistant (GTA) for CS 159 at Purdue</p>
        </div>
      </div>
      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>Aug 2024</h3>
        </div>
        <div className="news_content">
          <p>Started my masters degree in computer science at Purdue</p>
        </div>
      </div>
      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>Mar 2023</h3>
        </div>
        <div className="news_content">
          <p>Started as software developer 1 at the New Mexico State Environment Department</p>
        </div>
      </div>

      
      

    </div>
  )
}

export default News
