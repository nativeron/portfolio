import React, { useState, useEffect } from 'react';
import './styles/App.scss'
import { PortfolioProvider } from './context/context';
import Home from './components/Home';
import NavB from './components/Nav'
function App() {
  const [home, setHome] = useState({});
  return (
    <PortfolioProvider value={{ home }}>
    <NavB />
     <Home/>
    </PortfolioProvider>
  );
}

export default App;
