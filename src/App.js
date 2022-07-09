import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Academic from './components/Academic/Academic';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Home/>
      <About/>
      <Academic />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
