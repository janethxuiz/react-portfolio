import './AboutPage.css'

import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/janeth.img.jpg'

const AboutPage = () => {
  return (
    <div className='about-page'>
        <div className='left'>
          <h1>About me</h1>
          <p>heres a little you should know about me</p>
          <Link to='/contact'>
            <button className='btn'>Contact</button>
          </Link>
        </div>

        <div className='right'>
          <div className='img-container'>
              <img src={img} className='img' alt='true'/>
          </div>
        </div>
    </div>
  )
}

export default AboutPage;