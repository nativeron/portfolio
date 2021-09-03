import React from 'react'
import prueba from '../img/weather.png'
export default function ProjectCard({name,img,description,link}) {
    return (
        <div style={{width:'30%'}}>
            <img src={img} width='100%'/>
            <div style={{backgroundColor:'white'}}>
              <h6>{name}</h6>
            <p>{description}</p>
            <a style={{cursor:'pointer'}}><p>{link}</p></a>  
            </div>
            
        </div>
    )
}
