import React from 'react'
import "./Product.css"
import {malumot} from "../../datas/maxsulot.js"
import Malumot from '../Malumot/Malumot'
function Product() {
  return (
    <div className='product'>
        <div className='our'>
            <h1>Our Best Product</h1>
            <div className='href'>
            <a href="">New Plants</a>
            <a href="">New Arrivals</a>
            <a href="">Sale</a>
            </div>
        </div>
        <div className='bb'>
        {malumot.map((item,index)=>(
            <Malumot key={index} {...item}/>
        ))}
        </div>
        <div className='button'>
        <button>View All</button>
        </div>
    </div>
  )
}

export default Product