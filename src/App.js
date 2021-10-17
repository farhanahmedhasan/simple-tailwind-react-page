import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

import Hero from './components/Hero';
import Menus from './components/Menus';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Menus />
      </Router>
    </>
  );
}

export default App;
