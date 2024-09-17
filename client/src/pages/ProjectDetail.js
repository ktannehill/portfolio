import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PROJECTS from "../assets/data/data"
import '../style/global.css'
import '../style/project-detail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currProj, setCurrProj] = useState(null)

  useEffect(() => {

    const filtered_proj = PROJECTS.find(proj => proj.id === +id);

    if (filtered_proj) {
      setCurrProj(filtered_proj);
    } else {
      navigate("/");
    }

    document.getElementById("header")?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  }, [id, navigate])

  if (!currProj) {
    return "Loading..."
  }
  
  const { images, title, link, highlights, description, tech } = currProj
  const [largeImg, mediumImg, smallImg] = images

  const mapped_tech = tech?.map(para => <li key={para}>{para}</li>)
  const mapped_HL = highlights?.map(para => <li key={para}>{para}</li>)
  const mapped_desc = description?.map(para => <p key={para}>{para}</p>)

  return (
    <>

      <div className='container'>
        <div className='padded'>
          <div className='heading-container'>
            <div className='orange-block'>
              <h1>{title}</h1>
            </div>
          </div>
        </div>
        <aside>
          <picture className='card'>
            <source srcSet={smallImg} media='(max-width: 600px)' />
            <source srcSet={mediumImg} media='(max-width: 1200px)' />
            <img src={largeImg} alt={title} loading="lazy" />
          </picture>
          <p className='padded'><a href={link} target="_blank" rel="noopener noreferrer" className='link-effect'>
            GitHub
          </a></p>
        </aside>
      </div>

      <main className='green-100'>
        <div className='container'>
          <div className='padded'>
            <ul id="tech-list" className='orange-accent'>
              {mapped_tech}
            </ul>

            <div className='padded'>
              <h2 className='orange-block'>Highlights</h2>
              <ul>
                {mapped_HL}
              </ul>
            </div>

            <h2 className='orange-block'>The Making Of</h2>
            {mapped_desc}
          </div>
        </div>
      </main>

    </>
  )
}

export default ProjectDetail