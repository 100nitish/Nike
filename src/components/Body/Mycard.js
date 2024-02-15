import React from 'react'
import './Mycard.css'
import jak from '../images/Nikejak2.png'
import Card1 from '../images/card1.jpg'
import Card2 from '../images/card2.jpg'
import Card3 from '../images/card3.jpg'

function Mycard(hero) {
  return (
    <div>
        <div className='mycar'>
          <h4>Featured</h4>
          <img src={jak} alt=''></img>
          <div className='car1'>
          <h2>GIVE THE PERFECT GIFT</h2>
          <p>Find The Perfec Gift Of You And Yours This Valantin's Day.</p>
          <button>Shop</button>
          </div>
        </div>
        <div className='mycard1'>
          <div className='cardj1'>
            <img src={Card1} alt=''></img>
            <div className='uncon'><p>Usher in the New Year</p>
            <button>Shop</button></div>
          </div>
          <div className='cardj1'>
            <img src={Card2} alt=''></img>
            <div className='uncon'><p>Usher in the New Year</p>
            <button>Shop</button></div>
          </div>
          <div className='cardj1'>
            <img src={Card3} alt=''></img>
            <div className='uncon'><p>Usher in the New Year</p>
            <button>Shop</button> </div>
          </div>
          
        </div>
      
    </div>
  )
}

export default Mycard
