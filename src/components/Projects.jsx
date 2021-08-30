import React, { useContext } from 'react'
import { PortfolioContext } from '../context/context'
import folder from '../img/folder.png'

export default function Projects() {
    const {data} = useContext(PortfolioContext)
    return (
        <div>
        <div className='title-container'> 
            <img src={folder} alt='folder' width='10%'/>
            <h2>{data.nav[1]}</h2>
            
        </div>
        
        </div>
    )
}
