import React from 'react'
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const Header = () => {
  return (
    <div id="header">
      <h3 className='orange-block'>KT</h3>
      <ul>
        <li>
          <a href="">
            About
          </a>
        </li>
        <li>
          <a href="">
            Projects
          </a>
        </li>
        <li>
          <a href="">
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