import React from 'react';
import './styles/App.scss'
import { PortfolioProvider } from './context/context';
import Home from './components/Home';
import NavB from './components/Nav'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <PortfolioProvider>
    <NavB />
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </PortfolioProvider>
    </div>
  );
}

export default App;
