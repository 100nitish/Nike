import React from 'react'
import Img1 from '../images/frame.png'
import './Body1.css'

function Body1() {
  return (
    <div>
      <div className='bd1'>
        <div className='sec1'>
            <img src={Img1} alt=''></img>
        </div>
        <div className='sec2'>
            <h4>Nike Alphafly 3</h4>
            <h1>LEAVE YOURSELF IN THE DUST</h1>
            <p>Marathon speed to push beyond what you thought possible.</p>
            <button>Notify Me</button>
        </div>
      </div>

    </div>
  )
}

export default Body1
