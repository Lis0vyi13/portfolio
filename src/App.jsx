import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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
        </main>
      </div>
    </Router>
  );
}

export default App;

