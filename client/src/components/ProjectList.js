import React from 'react'
import PROJECTS from "../assets/data/data"
import ProjectCard from './ProjectCard'

const mapped_projects = PROJECTS.reverse().map(proj => <ProjectCard key={proj.id} proj={proj} />)

const Projects = () => {
  return (
    <div id="projects" className='container'>
        <h2>Projects</h2>
        <div>
          {mapped_projects}
        </div>
    </div>
  )
}

export default Projects