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
            <img id="pc-image" src={pc} width='20%'alt='pc'/>
            <div style={{width:'60%'}}>
           <p id="name">{data.about[0]}</p>
          
           <ReactTypingEffect id="name" style={{marginTop:'-5px'}} 
           text={["Full stack developer","Front end developer", "Back end developer"]}
           className="typical"
           speed="100"
           eraseDelay="1000"
          />
           </div>
          </div>
        </div>
      </>
    )
}
