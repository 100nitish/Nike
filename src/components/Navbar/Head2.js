import React from "react";
import './Head2.css'

function Head2() {
  return (
    <div>
      <div className="head2">
        <div className="logo1">
          <img
            src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-mobile.jpg"
            alt=""
          ></img>
        </div>
        <div className="list1">
            <ul>
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>Customise</li>
                <li>SNKRS</li>
            </ul>
        </div>
        <div className="icon1">
            <input type="search"  className='search' placeholder="Search"></input>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-circle"></i>

        </div>
      </div>
    </div>
  );
}

export default Head2;
