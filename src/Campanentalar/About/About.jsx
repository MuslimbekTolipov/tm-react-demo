import React from 'react'
import "./About.css"
import Daraxt from "../../assest/daraxt.png"
function About() {
  return (
    <div className='about'>
     <div className='bg'>
       <img src={Daraxt} alt="" />
     </div>
     <div className='about_text'>
         <h2>Continue to Develop to Became Global Company</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
         <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. </b>
         <br />
         <button>Read More</button>
     </div>
    </div>
  )
}

export default About