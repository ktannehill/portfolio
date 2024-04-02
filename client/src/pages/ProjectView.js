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

  const { image, title, link, highlights, description, tech } = currProj

  const mapped_tech = tech?.map(para => (<li key={para}>{para}</li>))
  const mapped_HL = highlights?.map(para => (<li key={para}>{para}</li>))
  const mapped_desc = description?.map(para => (<p key={para}>{para}</p>))

  if (!currProj) {
    return "Loading..."
  }

  return (
    <section className='container padded'>

      <div className='two-thirds'>
        <h1>{title}</h1>
        <aside className='card-view padded'>
          <img src={image} alt={title} />
          <p><a href={link} target="_blank" rel="noopener noreferrer" className='link-effect'>
            GitHub
          </a></p>
        </aside>
      </div>

        <main className='dark-green-bg padded'>
          <div className='two-thirds'>
            <ul id="tech-list" className='orange-accent'>
              {mapped_tech}
            </ul>

            <div className='padded'>
              <h2>Highlights</h2>
              <ul>
                {mapped_HL}
              </ul>
            </div>

            <h2>The Making Of</h2>
            {mapped_desc}
          </div>
        </main>

    </section>
  )
}

export default ProjectView