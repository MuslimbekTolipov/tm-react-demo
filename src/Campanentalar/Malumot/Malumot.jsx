import React from 'react'
import "./Malumot.css"
function Malumot({image,nomi, yulduz,narxi}) {
  return (
    <div className='malumot'>
        <img className='image' src={image} alt="" />
        <h3>{nomi}</h3>
        <img src={yulduz} alt="" />
        <h4>{narxi}</h4>
    </div>
  )
}

export default Malumot