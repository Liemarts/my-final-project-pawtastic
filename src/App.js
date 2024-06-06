import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Home from './Home';
import imageFavicon from './Pictures/icons8-cat-footprint-40.png';
import Footer from './components/Footer';


function App() {

  return <Router>
  <nav>
    <Link to= "/" className='link iconTitle'><span><img src={imageFavicon} width="20px" height="20px" alt='fav'/> Paw-tastic Care</span></Link>
    <Link to= "/" className='link'>Главная</Link>
    <Link to= "/services" className='link'>Услуги</Link>
    <Link to= "/team" className='link'>Наша команда</Link>
    <Link to= "/contact" className='link'>Контакты</Link>
  </nav>

  <Routes>
    <Route path='/' element= {<Home/>} /> 
    <Route path='/services' element= {<Services/>} />
    <Route path='/team' element= {<Team/>} />
    <Route path='/contact' element= {<Contact/>} />
  </Routes>

    <Footer />

  </Router>


}

export default App;


