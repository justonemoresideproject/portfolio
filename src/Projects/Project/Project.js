import React from 'react'

import './Project.css'

function Project({project}) {
    console.log(project)
    return (
        <div className='projectContainer'>
            <h1>
                {project.name}
            </h1>
            <img className='projectImg' />
            <div className='projectDescription'>
                {project.description}
            </div>
        </div>
    )
}

export default Project