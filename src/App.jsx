import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
function App() {
  return (
    <Router>
      <div className='relative main-bg bg-no-repeat bg-cover m-auto bg-center w-full h-screen'>
        <Navbar />
        <main>
          <Hero />
          <About />
        </main>
      </div>
    </Router>
  );
}

export default App;

