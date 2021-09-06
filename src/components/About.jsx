import React from 'react'
import { useContext } from 'react'
import { PortfolioContext } from '../context/context'
import js from '../img/javascript.png'
import ex from '../img/expressjs-icon.png'
import video from '../img/brain1.mp4'
import img from '../img/creativity.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function About() {
    const {data} = useContext(PortfolioContext)
    return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
 <div id="about" className='title-container'>
            <h2>{data.nav[0]}</h2>
            
        </div>
        <div className='brain-container'>
          <video width='250' loop autoPlay muted>
            <source src={video} type="video/mp4"></source>
            <source src={video} type="video/ogg"></source>
        </video>   
        <p  style={{    padding:'7%'}}>"qui dolorem ipsum, <img width='30px' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/56/flag-for-argentina_1f1e6-1f1f7.png"/>
        quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem".</p>
       
        </div>
        <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="svgbrain transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 78.50791605301916,244.08818114874816 157.01583210603832,238.17636229749633 205,218 C 252.98416789396168,197.82363770250367 270.44458762886586,163.38273195876286 327,187 C 383.55541237113414,210.61726804123714 479.20581737849795,292.2927098674522 556,277 C 632.794182621502,261.7072901325478 690.7321428571428,149.44642857142856 740,162 C 789.2678571428572,174.55357142857144 829.8656111929307,311.92157584683355 885,323 C 940.1343888070693,334.07842415316645 1009.805412371134,218.86726804123708 1082,177 C 1154.194587628866,135.13273195876292 1228.9127393225333,166.60935198821798 1289,191 C 1349.0872606774667,215.39064801178202 1394.5436303387332,232.695324005891 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#c5c1deff" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 250)"></path></svg>
        <div className='creativity-container'>
        
        <p>qui dolorem ipsum, quia dolor sit amet consectetur adipisci</p><img src={img} id='creativity' width='200' style={{marginTop:'-11%'}}/>

        </div>
        
             <div className="skills">
             
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
         Full stack web developer <a target='_blank' href='https://certificates.soyhenry.com/cert?id=78ca694b-ea83-4b96-a842-06fb82e37843'><button><AiOutlineArrowRight/></button></a></div>
        <div className='henry'><img width='150px' src='https://d33wubrfki0l68.cloudfront.net/b92ab3b21cc2504828d87929ebe023811b50021b/bb1ef/img/misuse-3.png'/>
         Back End Development and APIs<a target='_blank' href='https://www.freecodecamp.org/certification/nativeron/back-end-development-and-apis'><button><AiOutlineArrowRight/></button></a></div>

        </div>
       
        </div>
        </div>

    </div>
       
    )
}
