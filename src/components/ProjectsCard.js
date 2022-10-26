import './ProjectsCard.css';

import React from 'react'
import { NavLink } from 'react-router-dom'

function ProjectsCard(props) {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='image' />
    <h2 className='project-title'>{props.title}</h2>
    <div className='project-details'>
        <p>{props.text}</p>
        <div className='project-btn'>
            <NavLink to={props.view} className='btn'>View</NavLink>
            {/* add link to github */}
            <NavLink to='url.com' className='btn'>Source</NavLink>

        </div>
    </div>
</div>
  )
}
 
export default ProjectsCard