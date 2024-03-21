import { lazy } from 'react';
import { HashRouter as Router } from 'react-router-dom';

const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const About = lazy(() => import('./components/About'));
const Stack = lazy(() => import('./components/Stack'));
const Benefits = lazy(() => import('./components/Benefits'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <div className='relative m-auto bg-center'>
        <Navbar />
        <main>
          <div className='main-bg'>
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

