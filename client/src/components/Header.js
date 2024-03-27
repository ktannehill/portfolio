import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { MdSunny } from "react-icons/md";
// import { IoMoon } from "react-icons/io5";

const Header = () => {
  // const navigate = useNavigate()

  const handleGoToAbout = () => {
    window.location.href = '/#about'
  };

  return (
    <div id="header">
      <h3 className='orange-block'><Link to="/">KT</Link></h3>
      <ul>
        <li>
          <Link to="/#loc-about" className='link-effect'>
            About
          </Link>
        </li>
        <li>
          <Link to="/#loc-projects" className='link-effect'>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/#loc-contact" className='link-effect'>
            Contact
          </Link>
        </li>
        {/* <li>
          <MdSunny />
          <IoMoon />
        </li> */}
      </ul>
    </div>
  )
}

export default Header