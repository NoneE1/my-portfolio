import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
