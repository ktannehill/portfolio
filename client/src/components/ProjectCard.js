import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ proj }) => {
  const { id, images, title, summary } = proj

  const largeImg = images[0]
  const mediumImg = images[1]
  const smallImg = images[2]

  return (
    <div className='card'>
      {/* <img src={image} alt={title} /> */}
      <img 
        srcSet={`${smallImg} 600w, ${mediumImg} 1000w, ${largeImg} 1600w`}
        sizes="(max-width: 600px) 600px, 
               (max-width: 1000px) 1000px, 
               1600px"
        src={largeImg} 
        alt={title}
      />
      
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