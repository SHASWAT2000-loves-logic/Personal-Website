import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
function App() {
  return (
    <div id="personal_website">
      <Sidebar />
      {/* Will divide the content section into various componenets */}
      <main className="main_content">
        <About />
        <Education />
      </main>
    </div>
  );
}

export default App;
