import React, { useState, useEffect } from 'react';
import './styles/App.scss'
import { PortfolioProvider } from './context/context';
import Home from './components/Home';
import NavB from './components/Nav'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const [data, setData] = useState({});
  return (
    <div className="App">
    <PortfolioProvider>
    <NavB />
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
    </PortfolioProvider>
    </div>
  );
}

export default App;
