import React from 'react'
import "./Footer.css"
import Icon from "../../assest/icon.png"
import Iconca from "../../assest/iconca.png"
import Iconka from "../../assest/iconka.png"
function Footer() {
  return (
    <div className='footer'>
    <div className='aaa'>
        <h3>Plant</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet.</p>
        <img src={Icon} alt="" />
        <img src={Iconca} alt="" />
        <img src={Iconka} alt="" />
    </div>
    <div className='bbb'>
        <h3>Navigation</h3>
        <p>Home</p>
        <p>About</p>
        <p>Help & Support</p>
        <p>Product</p>
    </div>
    <div className='bbb'>
        <h3>About Us</h3>
        <p>Contact</p>
        <p>Address</p>
        <p>Blog</p>
        <p>About Us</p>
    </div>
    <div className='bbb'>
        <h3>Help</h3>
        <p>Coustomers Services</p>
        <p>FAQs</p>
        <p>We Are Hiring</p>
        <p>Returns</p>
    </div>
    </div>
  )
}

export default Footer