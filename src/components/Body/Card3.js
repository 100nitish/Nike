import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Card3.css'
import Card1 from '../images/card3-1.jpg'
import Card2 from '../images/card3-2.jpg'
import Card32 from '../images/card3-3.jpg'
import Card4 from '../images/card3-4.jpg'
import Card5 from '../images/card3-5.jpg'
import Card6 from '../images/card3-6.jpg'

function Card3() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };
  return (
    <div>
        <div className='sec-im1'>
            <h4>Just In</h4>
            <img src='https://i.etsystatic.com/20605212/r/il/ce93f0/4910501292/il_fullxfull.4910501292_hqro.jpg' alt=''>

            </img>
            <div className='im1'>
            <h2>NIKE G.T. CUT 3 'SISTERHOOD'</h2>
            <p>Inspired by bond WNBA Hoopers Sheare,</p>
            <button>Shop Now</button>
            </div>


        </div>
        <Carousel className='slide-im1' responsive={responsive}>

        <div className='slide1'><img src={Card1} alt=''></img></div>
        <div className='slide1'><img src={Card2} alt=''></img></div>
        <div className='slide1'><img src={Card32} alt=''></img></div>
        <div className='slide1'><img src={Card4} alt=''></img></div>
        <div className='slide1'><img src={Card5} alt=''></img></div>
        <div className='slide1'><img src={Card6} alt=''></img></div>
        </Carousel>
      
    </div>
  )
}

export default Card3




