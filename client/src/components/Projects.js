import React from 'react'
import PROJECTS from "../assets/data/data"
import Project from './Project'

const mapped_projects = PROJECTS.map(proj => <Project />)

const Projects = () => {
  return (
    <div>
        Projects
        {/* {mapped_projects} */}
    </div>
  )
}

export default Projects