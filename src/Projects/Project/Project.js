import React from 'react'

import './Project.css'

function Project({project}) {
    return (
        <div className='projectContainer'>
            <div className='projectImgContainer'>
                <img className='projectImg' src={`${project.img}`}/>
            </div>
            <div className='projectDescriptionContainer'>
                <h1 className='projectTitle'>
                    {project.name}
                </h1>
                <div className='projectDescription'>
                    {project.description}
                </div>
            </div>
        </div>
    )
}

export default Project