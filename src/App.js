import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import GEMProject from './pages/GEMProject'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello world</h1>
        <p>Every official website has a humble start huh</p>
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/gem-project" element={<GEMProject />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
