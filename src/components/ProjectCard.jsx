import React from 'react'
export default function ProjectCard({name,img,description,link,pag,tech}) {
    return (
        <div className='card1'>
            <div className='image-description'>
            <img className='image-card' style={{'borderRadius':'20px 20px 0px 0px'}} src={img}/>
            <div className='middle'><div className='text'>
                { tech.map((x)=>{
                    return(
                        <p className='tech'>{x}</p>
                    )
                }) }
                </div></div>
            </div>
            
              <h6>{name}</h6>
            <p className='description'>{description}</p>
        <a target="_blank" style={{color:'#43b69c'}} href={link}><p>{pag}</p></a>          
            
        </div>
    )
}
