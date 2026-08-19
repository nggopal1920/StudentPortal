import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FilterRow from './components/FilterRow';
import Home from './components/Home';
import BtechPage from './components/BtechPage'; // B.Tech wali file
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar aur FilterRow hamesha upar dikhenge, chahe koi bhi page khule */}
        <Navbar />
        <FilterRow />

        {/* Beech ka content yahan routes ke hisab se badlega */}
        <div className="main-content">
          <Routes>
            <Route path="/Gallery" element={<Gallery/>} />
            <Route path="/" element={<Home />} />
            <Route path="/btech" element={<BtechPage />} />
          </Routes>
        </div>

        {/* Footer hamesha sabse niche fixed rahega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
