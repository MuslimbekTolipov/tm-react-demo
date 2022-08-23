import React from 'react'
import "./Banner.css"
import Gul from "../../assest/gul.png"
import Barg from "../../assest/barg.png"
function Banner() {
  return (
    <div className='banner'>
     <div className='grow'>
        <h1>Growing Beautiful Plants at Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
        <div className='btn'>
        <button>Learn More</button>
        <div className='barg'>
         <img src={Barg} alt="" />
         </div>
        </div>
    </div>
    <div className='img'>
        <button className='btnca'>Cactus stem</button>
        <button className='btnt'>Cactus Thorn</button>
        <button className='btnpl'>Plant Media</button>
    </div>
    <div className='son'>
      <div className='bi'>
        <h2>2000+</h2>
        <p>Delivery</p>
      </div>
      <div className='bir'>
        <h2>1200+</h2>
        <p>Customers</p>
      </div>
      <div className='bir'>
        <h2>1000+</h2>
        <p>Product</p>
      </div>
    </div>
    </div>
  )
}

export default Banner