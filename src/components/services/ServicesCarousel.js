import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from '../assets/avatar.png'

function ServicesCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
return (
 <div className='srvice_carousel_container'>
    <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            <div className='testmonial_item'>
              <img className='avatar_img' src={Avatar} alt="screen img"/>
              <div>
                <h5>Florrie Jacobs</h5>
                <small>CEO of Company</small>
                 <p>
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                 </p>
                <span>
                   
                </span>
              </div>
            </div>
            <div><img className='avatar_img' src={Screen} alt="screen img"/></div>
            <div><img className='banner_img' src={Screen} alt="screen img"/></div>
            <div><img className='banner_img' src={Screen} alt="screen img"/></div>
    </Carousel>
 </div>
)
}

export default ServicesCarousel










