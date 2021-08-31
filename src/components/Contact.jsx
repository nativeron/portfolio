import React, { useContext } from 'react'
import { PortfolioContext } from '../context/context'
import git from '../img/github.png'
import lkdn from '../img/linkedin.png'

export default function Contact() {
    const {data} = useContext(PortfolioContext)
    return(
        <div>
            <div id="contact" className='title-container'>
                <h2>{data.nav[2]}</h2>
            </div>
            <div className="contact-container">
            <form className='gform contact-form' method='POST' data-email='nataliaveronduarte@gmail.com'
            action='https://script.google.com/macros/s/AKfycbzzEWbU41jIEfdoYcE7RxhX-mmqZag_IkwgAzAj/exec' >
                <label>Tu nombre</label>
                <input type="text" name='name'/>
                <label>Dejame un mensaje</label>
                <input type="text" name='message'/>
                <label>Tu mail</label>
                <input type="text" name='email'/>
                <button type='submit'>enviar</button>
            </form>
            <div>
            <p>nataliaveronduarte@gmail.com</p>
            <p>
                <a href="https://www.github.com/nativeron" target="_blank" style={{marginRight:'10px'}}><img width='50px' src={git} alt='github'/></a>
                <a href="https://linkedin.com/in/natalia-veron" target="_blank"><img  width='50px' src={lkdn} alt='linkedin'/></a>
            </p>
            </div>
            </div>
        </div>
    )
}
