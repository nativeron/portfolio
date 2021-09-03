import React from 'react'
export default function ProjectCard({name,img,description,link}) {
    return (
        <div className='card1'>
            <img style={{'borderRadius':'20px 20px 0px 0px'}} src={img} width='100%'/>
              <h6>{name}</h6>
            <p>{description}</p>
            <a style={{cursor:'pointer'}} href={link}><p>ver</p></a>  
            
        </div>
    )
}
