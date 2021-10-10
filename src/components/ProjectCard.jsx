import React from 'react'
export default function ProjectCard({name,img,description,link,pag,tech}) {
    return (
        <div className='card1'>
            <div className='image-description'>
            <img className='image-card' style={{'borderRadius':'20px 20px 0px 0px'}} src={img} alt={name}/>
            <div className='middle'><div className='text'>
                { tech.map((x)=>{
                    return(
                        <p className='tech' key={x}>{x}</p>
                    )
                }) }
                </div></div>
            </div>
            
              <h6>{name}</h6>
            <p className='description'>{description}</p>
        <a href={link} target="_blank" rel="noreferrer" style={{color:'#43b69c'}} ><button>{pag}</button></a>          
            
        </div>
    )
}
