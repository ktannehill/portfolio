import React from 'react'
import '../style/project-card.css'
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
      
      <div className='details'>
        <h3>{title}</h3>
        <p className='blurb'>{summary}</p>

        <Link to={`/project/${id}`}>
          <button className='link-effect link-effect-green'>
            More
          </button>
        </Link>

      </div>
    </div>
  )
}

export default ProjectCard