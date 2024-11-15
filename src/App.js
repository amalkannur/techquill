import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss"

import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact';
import Navbar from './components/Navbar.jsx';


function App() {
  return (
    <div className="App"> 
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
