import { HashRouter as Router } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Stack from "./components/Stack";
import Benefits from "./components/Benefits";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="relative m-auto bg-center">
        <Navbar />
        <main className="min-h-[100vh]">
          <div className="main-bg h-[1000px]">
            <Hero />
          </div>
          <About />
          <Stack />
          <Benefits />
          <Projects />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;

