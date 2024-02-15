import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer'>
            <div className='footer1'>
                <div className='li1'>
                    <h4>Find A Store</h4>
                   <ul>
                    <li>BECOME A MEMBER</li>
                    <li>Send Us Feedback</li>
                   </ul>

                </div>
                <div className='li1'>
                    <h4>Get Help</h4>
                    <ul>
                        <li>Order Status</li>
                        <li>Delivry</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact us on Nike.com Inquries</li>
                        <li>Contact us on All Other Inquries</li>
                    </ul>

                </div>
                <div className='li1'>
                    <h4>About Nike</h4>
                    <ul>
                        <li>News</li>
                        <li>Carrers</li>
                        <li>Investors</li>
                        <li>Sustainibilty</li>
                    </ul>


                </div>
                

            </div>
            <div className='footer2'>
                <div><i class="fa-brands fa-x-twitter"></i></div>
                <div><i class="fa-brands fa-facebook"></i></div>
                <div><i class="fa-brands fa-youtube"></i></div>
                <div><i class="fa-brands fa-instagram"></i></div>

            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
