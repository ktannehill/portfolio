import React from 'react'
import PROJECTS from "../assets/data/data"
import Project from './Project'

const mapped_projects = PROJECTS.reverse().map(proj => <Project key={proj.id} proj={proj} />)

const Projects = () => {
  return (
    <div id="projects" className='two-thirds padded'>
        <h2>Projects</h2>
        <div>
          {mapped_projects}
        </div>
    </div>
  )
}

export default Projects