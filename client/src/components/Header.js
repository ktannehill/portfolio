import React from 'react'
// import { MdSunny } from "react-icons/md";
// import { IoMoon } from "react-icons/io5";

const Header = () => {
  return (
    <div id="header">
      <h3 className='orange-block'><a href="#loc-home">KT</a></h3>
      <ul>
        <li>
          <a href="#loc-about" className='link-effect'>
            About
          </a>
        </li>
        <li>
          <a href="#loc-projects" className='link-effect'>
            Projects
          </a>
        </li>
        <li>
          <a href="#loc-contact" className='link-effect'>
            Contact
          </a>
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