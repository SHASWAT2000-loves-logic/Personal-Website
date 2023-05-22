// This is the news component

import {BiCalendar} from "react-icons/bi"

function News() {
  return (
    <div className="news_section" id="news">
      <h1>News &amp; Updates</h1>

      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>Mar 2023</h3>
        </div>
        <div className="news_content">
          <p>Started as software developer 1 at the New Mexico State Environment</p>
        </div>
      </div>

      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>Dec 2022</h3>
        </div>
        <div className="news_content">
          <p>Graduated from UNM with a bachelor's degree in computer science</p>
        </div>
      </div>

      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>Sept 2022</h3>
        </div>
        <div className="news_content">
          <p>Started as software developer intern as part of the EPICS program at UNM</p>
        </div>
      </div>

      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>Sept 2022</h3>
        </div>
        <div className="news_content">
          <p>Accepted the position of undergraduate research assistant at the Hand and Machine lab at UNM</p>
        </div>
      </div>

      <div className="news_grid">
        <div className="news_date">
          <h3><BiCalendar className="news_icon"/>Aug 2022</h3>
        </div>
        <div className="news_content">
          <p>Started the internship at Stanford University; part of NASA-ULI program</p>
        </div>
      </div>

      

    </div>
  )
}

export default News
