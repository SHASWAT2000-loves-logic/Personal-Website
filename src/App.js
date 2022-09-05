import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main">
      <Sidebar />
      {/* Will divide the content section into various componenets */}
      <div className="content">
        <h1>Heading</h1>
        <p>Content goes here</p>
      </div>
    </div>
  );
}

export default App;
