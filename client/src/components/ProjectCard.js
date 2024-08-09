import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ proj }) => {
  const { id, images, title, summary } = proj

  const largeImg = images[0]
  const mediumImg = images[1]
  const smallImg = images[2]

  return (
    <div className='card'>
      <picture>
        <source srcSet={largeImg} media='(min-width: 1000px)' />
        <source srcSet={mediumImg} media='(min-width: 600px)' />
        <img src={smallImg} alt={title} loading="lazy" />
      </picture>
      {/* <img 
        srcSet={`${smallImg} 600w, ${mediumImg} 1000w, ${largeImg} 1600w`}
        sizes="(max-width: 600px) 80vw, 
               (max-width: 1000px) 80vw, 
               100vw"
        src={largeImg} 
        alt={title}
        loading="lazy"
      /> */}
      
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