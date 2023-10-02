import React from 'react'
import Project from './Project/Project'
import { projectList } from './ProjectsList'

import './Projects.css'

function Projects() {
    return (
        <div className='projectsContainer'>
            <div className='optionsContainer'>
                <button>
                    Option 1
                </button>
                <button>
                    Option 2
                </button>
                <button>
                    Option 3
                </button>
            </div>
            <div className='projectsContainer '>
                {projectList.map(project => {
                    return (<Project project={project} />)
                })}
            </div>
        </div>
    )
}

export default Projects