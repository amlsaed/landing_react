import React from 'react'
import  './overview.css'
import OverviewCrousel from './OverviewCrousel'
import Screen from '../assets/NoPath.svg'

function Overview() {
  return (
    <div className='overview layout'>
        <div className='overview_text'>
                <h5>Advanced Customer Service Platform</h5>
                <h2>Platform Overview</h2>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                 At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                </p>
        </div>
        <OverviewCrousel/>
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
                </div>
                <div>
                    <img className='big_banner_img' src={Screen} alt="screen img"/>
                </div>
        </article>

        <article>
              
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
                <div className='list_scn'>
                    <ul>
                              <li>
                                      <div className='list_title'>
                                        <span>1</span>
                                        <h4>Market Research</h4>
                                      </div>
                                      <p>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                                sed diam nonumy eirmod tempor invidunt ut 
                                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                      </p>
                              </li>
                              <li>
                                      <div className='list_title'>
                                        <span>1</span>
                                        <h4>Market Research</h4>
                                      </div>
                                      <p>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                                sed diam nonumy eirmod tempor invidunt ut 
                                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                      </p>
                              </li>
                              <li>
                                      <div className='list_title'>
                                        <span>1</span>
                                        <h4>Market Research</h4>
                                      </div>
                                      <p>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                                sed diam nonumy eirmod tempor invidunt ut 
                                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                      </p>
                              </li>
                    </ul>
                </div>
        </article>

    </div>
  )
}

export default Overview