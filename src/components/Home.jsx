import React, { useContext } from "react";
import Particle from "react-particles-js";
import particlesConfig from "../particlesjs-config.json";
import ReactTypingEffect from 'react-typing-effect';
import pc from '../img/pc.png'
import { PortfolioContext } from "../context/context";

export default function Home() {
  const {data} = useContext(PortfolioContext)
    return (
        <>
            
        <div className="">
          <div className="intro-container">
            <div style={{width:'60%'}}>
           <p id="name">Natalia Verón</p>
          
           <ReactTypingEffect id="name" style={{marginTop:'-5px', fontSize:'1.5rem'}} 
           text={["Full stack developer","Front end developer", "Back end developer"]}
           className="typical"
           speed="50"
           eraseDelay="4000"
          />
           </div>
            </div>
        </div>
      </>
    )
}
