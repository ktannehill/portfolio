import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PROJECTS from "../assets/data/data"

const 
ProjectView = () => {
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

  return (
    <div className='two-thirds padded'>
        {/* <h1 className='orange-block'>{title}</h1>
        <div>
          <img src={image} alt={title} />
        </div> */}
        <div className='dark-green-bg padded'>
          {/* {mapped_desc} */}
        </div>
    </div>
  )
}

export default 
ProjectView