import React from 'react'
import "./Nav.css";
import { IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <>
        <nav>
            <div className='open_nav_toggle'>
                <RxHamburgerMenu />
            </div>
        <h1 className='Nav_logo'>
            <a href="">
                Elizabeth Ross
            </a>
        </h1>

            <ul className='nav_links'>
                <li>
                    <a href="">About </a>
                </li>
                <li>
                    <a href="">Contact Me</a>
                </li>
                <li>
                    <a href=""><IoPerson /> Client Login</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav
