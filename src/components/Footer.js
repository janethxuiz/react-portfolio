import './FooterStyles.css'

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <h4><FaHome size={20} style={{color: 'white', marginRight: '2rem'}}/> Portland, Oregon </h4>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: 'white', marginRight: '2rem'}}/> 503-758-9001 </h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}}/> janethruiz152@gmail.com </h4>
                </div>
            </div>
            <div className='right'>
                <div className='social'>
                <FaLinkedin size={30} style={{color: 'white', marginRight: '1rem'}}/>
                <FaGithub size={30} style={{color: 'white', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer