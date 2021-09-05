import React from 'react'
export default function ProjectCard({name,img,description,link,pag}) {
    return (
        <div className='card1'>
            <img style={{'borderRadius':'20px 20px 0px 0px'}} src={img} width='100%'/>
            <div></div>
              <h6>{name}</h6>
            <p className='description'>{description}</p>
            <a target="_blank" style={{cursor:'pointer'}} href={link}><p>{pag}</p></a>  
            
        </div>
    )
}
