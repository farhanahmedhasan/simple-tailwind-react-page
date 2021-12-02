import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Faq from './pages/Faq';

//calculate age
// function calculateAge(birthday) {
//   var ageDifMs = Date.now() - birthday.getTime();
//   var ageDate = new Date(ageDifMs); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/faq' exact component={Faq} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
