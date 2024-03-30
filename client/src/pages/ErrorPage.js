import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id="flex">
      <Header />
        <div id="outlet">
          <div className='container padded'>
            <section className='dark-green-bg'>
              <main className='two-thirds padded'>
                <h1 className='orange-block'>Oops!</h1>
                <p>That's not supposed to happen...</p>
                <Link to="/"><button className='link-effect'>Go home!</button></Link>
              </main>
            </section>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ErrorPage