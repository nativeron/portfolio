import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../context/context'
import folder from '../img/folder.png'
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
            <img src={folder} alt='folder' width='10%'/>
            <h2>{data.nav[1]}</h2></div>
            <div className='card-container' style={{display:'flex','justifyContent':'space-around', width:'100%'}}>
                {
                numpag===1 ? <button disabled={true} ><BiLeftArrow/></button>
                : <button onClick={() => setNumpag(numpag - 1)} ><BiLeftArrow/></button>
                } 
  {
                projectsView.map((x)=>{
                    console.log(x.img)
                    return (
                    <ProjectCard name={x.name} description={x.description} img={x.img} link={x.link} pag={x.pag} tech={x.tech}/>)
            })
        }
            {
                numpag===3 ? <button disabled={true}><BiRightArrow /></button> :
                <button onClick={() => setNumpag(numpag + 1)}><BiRightArrow /></button>
            }</div>
          
        
        
        </div>
    )
}
