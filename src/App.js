import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Bio from './components/Bio';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';


import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Skills />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
