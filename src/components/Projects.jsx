import React, { useContext } from 'react'
import { PortfolioContext } from '../context/context'
import folder from '../img/folder.png'
import projects from '../projects.json'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const {data} = useContext(PortfolioContext)
    return (
        <div>
        <div id="work" className='title-container'> 
            <img src={folder} alt='folder' width='10%'/>
            <h2>{data.nav[1]}</h2>
            {
                projects.map((x)=>{
                    return (
                    <ProjectCard name={x.name} description={x.description} img={x.img}/>)
            })
        }
        </div>
        
        </div>
    )
}
