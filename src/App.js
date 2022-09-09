// The App component consists of various components

/*
1. Sidebar 
2. About
3. Education
4. Experience
5. News
6. Awards
7. Contact
*/

import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import News from "./components/News";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
function App() {
  // when the page is refreshed the user will be directly taken to the top of the page

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="personal_website">
      <Sidebar />
      <main className="main_content">
        <About />
        <Education />
        <Experience />
        <News />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

export default App;
