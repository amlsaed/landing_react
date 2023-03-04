import React from 'react'
import Logo from '../assets/logo.png';
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from 'react-icons/ai'
function Nav() {
  return (
    <nav>
        <a>
            <img src={Logo}/>
        </a>
        <ul className='bg_nav'>
            <li>
                <a href="#">BROWSER</a>
            </li>
            <li>
                <a href="#">BOOTCAMPS</a>
            </li>
            <li>
                <a href="#">HOW It WORKS</a>
            </li>
            <li>
                <a href="#">TESTEMONIAL</a>
            </li>
        </ul>

        <a className='primary_button'>About us</a>
        <div class="sm_nav">
                <button><BiMenu/></button>
                <div class="sm_menu">
                        <button><AiOutlineClose/></button>
                        <ul>
                                <li>
                                    <a href="#">BROWSER</a>
                                </li>
                                <li>
                                    <a href="#">BOOTCAMPS</a>
                                </li>
                                <li>
                                    <a href="#">HOW It WORKS</a>
                                </li>
                                <li>
                                    <a href="#">TESTEMONIAL</a>
                                </li>
                            </ul>
                </div>
        </div>
    </nav>
  )
}

export default Nav;