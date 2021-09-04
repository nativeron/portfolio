import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../context/context'
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
import axios from 'axios';
import Particles from 'react-particles-js';
import particlesConfig from '../particlesjs-config.json'
export default function Contact() {
    const {data} = useContext(PortfolioContext)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setloading] = useState(false)
    const [message, setMessage] = useState({
        name: "",
        message: "",
        email: "",
      });
    const url= "https://script.google.com/macros/s/AKfycbzzEWbU41jIEfdoYcE7RxhX-mmqZag_IkwgAzAj/exec"
    const handleSubmit= async (e)=> {
        e.preventDefault()
        setloading(true)
        await axios.post(url, JSON.stringify(message))
        .then(res=>{
            setMessage({
                name:'',
                message:'',
                email:''
            })
            setloading(false)
            setSuccess(true)
        })
        .catch(res=> {
            setloading(false);
            setError(true)
        })
    }
    const handleChange = (e) => {
        setMessage({ 
            ...message, 
            [e.target.name]: e.target.value 
        });
      };
   const handleClickError=(e)=>{
    setError(false)
      }
    return(
        <div>
            <div id="contact" className='title-container'>
                <h2 style={{zIndex:4, marginTop:'4%'}}>{data.contact[0]}</h2>
            </div>
            <div className="contact-container">
                {
                    !success && !error && !loading &&
                <form className='gform contact-form' data-email='nataliaveronduarte@gmail.com'
            onSubmit={handleSubmit}>
                <label>{data.contact[1]}</label>
                <input onChange={handleChange} type="text" name='name' required/>
                <label>{data.contact[2]}</label>
                <textarea value={message.message} onChange={handleChange} style={{height:'7rem'}} type="text" name='message' required/>
                <label>{data.contact[3]}</label>
                <input value={message.email} onChange={handleChange} type="text" name='email' required/>
                <button type='submit'>{data.contact[4]}</button>
            </form>
                }
                {
                    loading &&
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                }
                {
                    success && 
                    <div style={{fontFamily:'monospace'}} className='contact-form'> {data.contact[5]}</div>
                }
                {
                    error && 
                   <div style={{color:'red'}} className='contact-form'> {data.contact[6]} 
                   <p onClick={(e)=>handleClickError(e)} style={{textDecoration:'underline', cursor:'pointer'}} >try again</p>
                   </div>
                }            
            <div style={{zIndex:1}}>
            <Particles params={particlesConfig} className="App-particles__container" />
            <p>nataliaveronduarte@gmail.com</p>
            <div>
                <a href="https://www.github.com/nativeron" target="_blank" style={{marginRight:'10px'}}><AiFillGithub className='icon' /></a>
                <a href="https://linkedin.com/in/natalia-veron" target="_blank"><AiFillLinkedin className='icon' /></a>
                
            </div>
            </div>
            </div>
            <button id="arrow"><a href='#nav'><AiOutlineArrowUp/></a> </button>
        </div>
    )
}
