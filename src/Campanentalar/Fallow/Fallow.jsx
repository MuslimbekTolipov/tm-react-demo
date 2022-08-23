import React from 'react'
import "./Fallow.css"
import {rasmlar} from '../../datas/rasmlar'
import Falrasm from '../Falrasm/Falrasm'
function Fallow() {
  return (
    <div className='fall'>
      <h2>Follow Us on Instagram</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu msan sit amet nunc cursus. Nec tristique at in erat lectus</p>
      <div className='box'>
            {rasmlar.map((item,index)=>(
                <Falrasm key={index} item={item}/>
            ))}
      </div>
    </div>
  )
}

export default Fallow