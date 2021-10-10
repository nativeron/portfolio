import React from "react";
import ReactTypingEffect from 'react-typing-effect';
export default function Home() {
    return (
        <>
            
        <div className="">
          <div className="intro-container">
            <div style={{width:'60%'}}>
           <p className="name">Natalia Verón</p>
          
           <ReactTypingEffect className="name typical" style={{marginTop:'-5px', fontSize:'1.5rem'}} 
           text={["Full stack developer","Front end developer", "Back end developer"]}
           speed="50"
           eraseDelay="4000"
          />
           </div>
            </div>
        </div>
        
      </>
    )
}
