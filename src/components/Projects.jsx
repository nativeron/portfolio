import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../context/context'
import ProjectCard from './ProjectCard'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'

export default function Projects() {
    const {data} = useContext(PortfolioContext)
    const group = 2
    const [numpag, setNumpag] = useState(1)
	const conteofinal = numpag * group
	const conteoinicial= conteofinal - group
    const projectsView = data.projects.slice(conteoinicial,conteofinal)
    return (
        <div>
        <div id="work" className='title-container'> 
            <h2>{data.nav[1]}</h2></div>
            <div className='card-container' style={{display:'flex','justifyContent':' space-between', minWidth:'100%', alignItems: 'center'}}>
                {
                numpag===1 ? <button className='buttonPC' aria-label='disabled button' disabled={true} ><BiLeftArrow/></button>
                : <button aria-label='to left' onClick={() => setNumpag(numpag - 1)} ><BiLeftArrow/></button>
                } 
  {
                projectsView.map((x)=>{
                    return (
                    <ProjectCard key={x.name} name={x.name} description={x.description} img={x.img} link={x.link} pag={x.pag} tech={x.tech}/>)
            })
        }   
            {
                numpag===3 ? <button aria-label='disabled button' className='buttonPC' disabled={true}><BiRightArrow /></button> :
                <button aria-label='next' onClick={() => setNumpag(numpag + 1)}><BiRightArrow /></button>
            }
            </div>
            <div className='res-container'>
            {
                data.projects.map((x)=>{
                    return (
                    <ProjectCard key={x.name} name={x.name} description={x.description} img={x.img} link={x.link} pag={x.pag} tech={x.tech}/>)
            })
        }   
          
        </div>
        
        </div>
    )
}
