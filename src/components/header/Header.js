import React from 'react'
import Nav from './Nav'
import Banner from "./Banner.js"
import Brands from './Brands'
import "./header.css"
function Header() {
  return (
    <header className='layout'>
        <Nav/>
        <Banner/>
        <Brands/>
    </header>
  )
}

export default Header