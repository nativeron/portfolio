import React from 'react'
import { useContext } from 'react'
import { PortfolioContext } from '../context/context'
import js from '../img/javascript.png'
import ex from '../img/expressjs-icon.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function About() {
    const {data} = useContext(PortfolioContext)
    return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
 <div id="about" className='title-container'>
            <h2>{data.nav[0]}</h2>
            
        </div>
             <div className="skills"><h5 style={{fontFamily:'Lobster'}}>Skills</h5>
            <p>Front-end</p>
        <p > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>           
                          
                 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>                    
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>                  
                   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>                  
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> 
                  </p><p>Back-end</p><p>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="postgresql" width="40" height="40"/>                   
                  <img src={ex} alt="express" width="40" height="40"/>  
                  <img src="https://raw.githubusercontent.com/sammwyy/sammwyy/master/skills/nodejs.png" alt="nodejs" width="40" height="40"/>
                  <img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" alt="sequelize" width="40" height="40" /><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/></p>

            {/* <p>learning</p>
            <p> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
             */}{/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" alt="django" width="40" height="40"/>            
            <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/>              
            */}             
             
           </div>
        <div>
        
        <div className='skills-container'>
        <img src={js} alt='plant' id='npm'/><div className='certificate'>
        <h5>Certificates</h5>
        <div className='henry'><img width='150px' src='https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png'/>
        Full stack web developer <a target='_blank' href='https://certificates.soyhenry.com/cert?id=78ca694b-ea83-4b96-a842-06fb82e37843'><AiOutlineArrowRight/></a></div>
        <div className='henry'><img width='150px' src='https://d33wubrfki0l68.cloudfront.net/78278bdf3a25d3e5558190b140cca9cbe86471e8/05e51/img/misuse-6.png'/>
        Back End Development and APIs<a target='_blank' href='https://www.freecodecamp.org/certification/nativeron/back-end-development-and-apis'><AiOutlineArrowRight/></a></div>

        </div>
       
        </div>
        </div>

    </div>
       
    )
}
