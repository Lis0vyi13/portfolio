import { BrowserRouter as Router } from 'react-router-dom';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Stack from './components/Stack';

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
        </main>
      </div>
    </Router>
  );
}

export default App;

