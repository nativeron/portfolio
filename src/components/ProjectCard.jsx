import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function ProjectCard({name,img,description,link}) {
    return (
        <div className='card1'>
            <img style={{'borderRadius':'20px 20px 0px 0px'}} src={img} width='100%'/>
              <h6>{name}</h6>
            <p className='description'>{description}</p>
            <a target="_blank" style={{cursor:'pointer'}} href={link}><p><AiOutlineArrowRight/></p></a>  
            
        </div>
    )
}
