import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import resume from "../assets/documents/resume_kat_tannehill.pdf"
import EmailForm from './EmailForm';

const Contact = () => {
  return (
    <div id="loc-contact" className='dark-green-bg'>
        <div className='two-thirds padded'>
            <h1 className='orange-block'>Contact</h1>
            <p>See something you like? Have questions or suggestions? Feel free to reach out!</p>
        
            <div className='box'>
                <div className='rev-box'>
                    <div>
                        <h3 className='contact-links'>
                            <span className='icon'><FaLinkedin /></span>
                            <a href="https://www.linkedin.com/in/kat-tannehill/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </h3>
                        <h3 className='contact-links'>
                            <span className='icon'><FaGithub /></span>
                            <a href="https://github.com/ktannehill" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3 className='contact-links'>
                            <span className='icon'><FaMedium /></span>
                            <a href="https://medium.com/@ktannehill"target="_blank" rel="noopener noreferrer">
                                Medium
                            </a>
                        </h3>
                        <h3 className='contact-links'>
                            <span className='icon'><IoDocumentTextSharp /></span>
                            <a href={resume} target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </h3>
                    </div>
                </div>
                <EmailForm />
            </div>
        </div>
    </div>
  )
}

export default Contact