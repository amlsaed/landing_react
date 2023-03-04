import React from 'react'
import Screen from '../assets/NoPath.svg'
function Banner() {
  return (
    <div className='banner'>
        <div >
            <h5>Advanced Platform</h5>
            <h1>Take your team</h1>
            <h1>to the next level</h1>
            <p>
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            </p>
            <button className='secondary_button'>About us</button>
        </div>
        <div>
            <img className='banner_img' src={Screen} alt="screen img"/>
        </div>
    </div>
  )
}

export default Banner