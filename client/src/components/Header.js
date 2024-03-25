import React from 'react'
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const Header = () => {
  return (
    <div id="header">
      <h3>KT</h3>
      <ul>
        <li>
          About
        </li>
        <li>
          Projects
        </li>
        <li>
          Contact
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