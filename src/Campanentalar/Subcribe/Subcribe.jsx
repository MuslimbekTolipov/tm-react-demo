import React from 'react'
import "./Subcribe.css"
import Kotagul from "../../assest/kotagul.png"
function Subcribe() {
  return (
    <div className='sub'>
      <div className='quti'>
        <h3>Subscribe Our Newsletter</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor, accumsan sit amet nunc cursus. </p>
        <input type="text" placeholder='Enter mail...'/>
        <button>Subscribe</button>
      </div>
      <div className='quti'>
        <img src={Kotagul} alt="" />
      </div>
    </div>
  )
}

export default Subcribe