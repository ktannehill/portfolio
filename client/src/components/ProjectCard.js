import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ proj }) => {
  const { id, image, title, summary } = proj


  return (
    <div className='card'>
      <img src={image} alt={title} />
      
      <div className='details'>
        <h3>{title}</h3>
        <p>{summary}</p>

        <Link to={`/project/${id}`}>
          <button className='green-block'>
            More
          </button>
        </Link>

      </div>
    </div>
  )
}

export default ProjectCard