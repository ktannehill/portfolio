import React from 'react'

const Project = ({ proj }) => {
  const { image, title, summary } = proj


  return (
    <div className='card'>
      <img src={image} alt={title} />
      <div className='details'>
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default Project