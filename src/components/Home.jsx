import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../particlesjs-config.json";
import ReactTypingEffect from 'react-typing-effect';
export default function Home() {
    return (
        <>
        <div style={{backgroundColor:'red'}}>
            <Particle params={particlesConfig} className="App-particles__container" />
        </div>
            
        <div className="App">
          <div className="App-text">
            <h1 className="App-text__title">Natalia Verón</h1>
            <ReactTypingEffect
           text="Full stack developer "
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
          </div>
        </div>
      </>
    )
}
