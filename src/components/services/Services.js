import React from 'react'
import './services.css'
import ServicesCarousel from './ServicesCarousel'
function Services() {
  return (
    <div className='services layout '>
        <h3>Don't Just Take </h3>
        <h3>our Word for it!</h3>
        <div className='list_statics'>
            <ul>
                
                <li>
                        <span>570</span>
                        <span>Dowload</span>
                </li>
                <li>
                        <span>570</span>
                        <span>Active User</span>
                </li>
                <li>
                        <span>570</span>
                        <span>Positive Feedback</span>
                </li>
                <li>
                        <span>570</span>
                        <span>+ rating</span>
                </li>
            </ul>
        </div>
        <article>
                    <ServicesCarousel/>
                    <div className='article_component'>
                                    <h3>Acceleration Process to </h3>
                                    <h3>Grow Your Business</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                                    </p>
                                    <button className='primary_button'>About us</button>
                            </div>
        </article>
    </div>
  )
}

export default Services