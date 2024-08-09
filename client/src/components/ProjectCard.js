import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ proj }) => {
  const { id, images, title, summary } = proj

  const [largeImg, mediumImg, smallImg] = images

  return (
    <div className='card'>
      <picture>
        <source srcSet={smallImg} media='(max-width: 600px)' />
        <source srcSet={mediumImg} media='(max-width: 1200px)' />
        <img src={largeImg} alt={title} loading="lazy" />
      </picture>
      {/* <img 
        srcSet={`${smallImg} 600w, ${mediumImg} 1000w, ${largeImg} 1600w`}
        sizes="(max-width: 600px) 600px, 
               (max-width: 1200px) 1000px, 
               1600px"
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