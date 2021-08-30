import React, { useContext } from 'react'
import { PortfolioContext } from '../context/context'

export default function Contact() {
    const {data} = useContext(PortfolioContext)
    return(
        <div>
            <div className='title-container'>
                <h2>{data.nav[2]}</h2>
            </div>
            <form className='gform' method='POST' data-email='nataliaveronduarte@gmail.com'
            action='https://script.google.com/macros/s/AKfycbzzEWbU41jIEfdoYcE7RxhX-mmqZag_IkwgAzAj/exec' >
                <input type="text" name='name'/>
                <input type="text" name='message'/>
                <input type="text" name='email'/>
                <button type='submit'>enviar</button>
            </form>
        </div>
    )
}
