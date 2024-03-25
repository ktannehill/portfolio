import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <p>
        Made with <span className='orange-accent'><FaHeart /></span> && <span className='orange-accent'><FaCoffee /></span> by Kat Tannehill 2024
      </p>
    </div>
  )
}

export default Footer