import './ProjectsCard.css';
import ProjectsCard from './ProjectsCard';
import WorkData from './WorkData'

import React from 'react'

function Work() {
  return (
    <div className='card-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {WorkData.map((val, ind) => {
                return (
                    <ProjectsCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work