import React from 'react'
import About from '../components/About'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='container padded'>
      <About />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default Home