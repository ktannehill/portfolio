import React from 'react'
import PROJECTS from "../assets/data/data"
import Project from './Project'

const mapped_projects = PROJECTS.map(proj => <Project key={proj.id} proj={proj} />)

const Projects = () => {
  return (
    <div className='two-thirds padded'>
        <h1 className='orange-block'>Projects</h1>
        {/* {mapped_projects} */}
    </div>
  )
}

export default Projects