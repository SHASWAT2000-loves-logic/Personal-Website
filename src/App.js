// The App component is distributed into various components

/*
1. Sidebar
2. About
3. Education
4. Experience
5. Awards
*/

import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
function App() {
  return (
    <div id="personal_website">
      <Sidebar />
      <main className="main_content">
        <About />
        <Education />
        <Experience />
        <Awards />
      </main>
    </div>
  );
}

export default App;
