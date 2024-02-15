import React from 'react'
import './Head1.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Head1() {
  return (
    <BrowserRouter>
    <div>

        <div className='head1'>
            <div className='logo'>Nike</div>
            <div className='list'>
                <ul>
                    <li>Find a store</li>
                    <li>Help</li>
                    <li>Join us</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
      
    </div>
    <Routes>
      <Route to='/about'></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Head1
