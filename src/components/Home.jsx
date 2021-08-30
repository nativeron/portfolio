import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../particlesjs-config.json";
import ReactTypingEffect from 'react-typing-effect';
import pc from '../img/pc.png'
export default function Home() {
    return (
        <>
        <div style={{backgroundColor:'red'}}>
            <Particle params={particlesConfig} className="App-particles__container" />
        </div>
            
        <div className="">
          <div className="intro-container">
            <img id="pc-image" src={pc} width='20%'alt='pc'/>
           <ReactTypingEffect id="name"
           text="Full stack developer"
           className="typical"
           speed="100"
           eraseDelay="5000000"
           />
          </div>
        </div>
      </>
    )
}
