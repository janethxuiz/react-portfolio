import './AboutPage.css'

import React from 'react'
import { Link } from 'react-router-dom'
// add profile img to assets folder and add it here 
// import img from '../assets'

const AboutPage = () => {
  return (
    <div className='about'>
        <div className='left'>
          <h1>About me</h1>
          <p>heres a little you should know about me</p>
          <Link to='/contact'>
            <button className='btn'>Contact</button>
          </Link>
        </div>

        <div className='right'>
          <div className='img-container'>
              {/* add img  */}
              {/* <img src={} className='img' alt='true'/> */}
          </div>
        </div>
    </div>
  )
}

export default AboutPage;