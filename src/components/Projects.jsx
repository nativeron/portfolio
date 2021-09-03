import React, { useContext } from 'react'
import { PortfolioContext } from '../context/context'
import folder from '../img/folder.png'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const {data} = useContext(PortfolioContext)
    const projects=[{
        "name":"Marketplace Gamer",
        "link":"https://www.youtube.com/watch?v=AuHNVFE97YE",
        "img":"https://i.imgur.com/B2S48OV.png",
        "repo":"dfdf",
        "description":"dsfd"
    },
    {
        "name":"World's countries",
        "link":"https://www.linkedin.com/posts/natalia-veron_hola-les-comparto-mi-proyecto-individual-activity-6815732347489554432-NA79",
        "img":"https://i.imgur.com/YMWmMKH.png",
        "repo":"sdfsd",
        "description":"dfsdf"
    },
    {
        "name":"Wheater app",
        "link":"https://weatherapp-drab-omega.vercel.app/",
        "img":"https://i.imgur.com/DeLHKoR.png",
        "repo":"dsf",
        "description":"dfsdf"
    }]
    return (
        <div>
        <div id="work" className='title-container'> 
            <img src={folder} alt='folder' width='10%'/>
            <h2>{data.nav[1]}</h2></div>
            <div className='card-container' style={{display:'flex','justifyContent':'space-around', width:'100%'}}>
  {
                projects.map((x)=>{
                    console.log(x.img)
                    return (
                    <ProjectCard name={x.name} description={x.description} img={x.img} link={x.link}/>)
            })
        }

            </div>
          
        
        
        </div>
    )
}
