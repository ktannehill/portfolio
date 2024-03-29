import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PROJECTS from "../assets/data/data"

const ProjectView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currProj, setCurrProj] = useState({})

  useEffect(() => {
    const filtered_proj = PROJECTS.find(proj => proj.id === +id)

    setCurrProj(filtered_proj)

    if (!filtered_proj) {
      navigate("/")
    }
  }, [id])

  const { image, title, description, tech } = currProj

  console.log(description)

  const mapped_tech = tech?.map(para => (<p>{para}</p>))
  const mapped_desc = description?.map(para => (<p>{para}</p>))

  if (!currProj) {
    return "Loading..."
  }

  return (
    <section className='padded'>
      <div className='two-thirds'>
        <h1 className='orange-block'>{title}</h1>
        <aside className='card-view padded'>
          <img src={image} alt={title} />
        </aside>
      </div>
      <main className='dark-green-bg'>
        <div className='two-thirds padded'>
          {mapped_tech}
          {mapped_desc}
        </div>
      </main>
    </section>
  )
}

export default ProjectView