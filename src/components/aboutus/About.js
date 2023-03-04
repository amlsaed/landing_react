import React from 'react'
import './about.css'
import Screen from '../assets/NoPath.svg'
import Icon_1 from '../assets/Icon simple-boost.png'
import Icon_2 from '../assets/Icon awesome-bootstrap.png'
import Icon_3 from '../assets/Icon material-high-quality.png'
import Icon_4 from '../assets/business_center-24px.png'

import {BsArrowRight} from "react-icons/bs"
function About() {
  return (
    <div className='About layout'>
        <article>
            <div className='article_component'>
                            <h3>Best Platform for the</h3>
                            <h3>Technological Era</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                            </p>
                            <button className='primary_link'>Learn About Our Success <BsArrowRight/></button>
                    </div>
                    <div className='icons_conatiner'>
                        <div>
                            <span><img src={Icon_1}/></span>
                            <h5 className='h5_underline'>Scale Your Activity</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div>
                        <div>
                            <span><img src={Icon_2}/></span>
                            <h5 className='h5_underline'>Scale Your Activity</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div>
                        <div>
                            <span><img src={Icon_3}/></span>
                            <h5 className='h5_underline'>Scale Your Activity</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div>
                        <div>
                            <span><img src={Icon_4}/></span>
                            <h5 className='h5_underline'>Scale Your Activity</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div>
                    </div>
        </article>
        <article>
                <div>
                    <img className='big_banner_img' src={Screen} alt="screen img"/>
                </div>
                <div className='article_component'>
                        <h3>Best Platform for the</h3>
                        <h3>Technological Era</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                        </p>
                        <button className='primary_link'>Learn About Our Success <BsArrowRight/></button>
                </div>
        </article>
    </div>
  )
}

export default About