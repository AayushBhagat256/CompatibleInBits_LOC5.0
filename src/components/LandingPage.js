import React from 'react'
import '../styles/Landing.css'
import Image from '../images/homepagepng.png'
import Navbar from './Navbar'

function LandingPage() {
  return (
    <div>
      {/* <h1>This is a landing page</h1> */}
      <Navbar/>
      <div className="landingContainer">
        <div className="imageContainer"><img src={Image} alt="" srcset=""/></div>
        <div className="messageContainer">
            <div className="headingmsg">
            <h1>Hello there</h1>
            </div>
            <div className="littlemore">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, at eligendi ullam iusto perspiciatis rerum, eaque in, commodi qui minima nisi itaque accusamus? Quaerat eligendi ea cumque perspiciatis magni eos!
            </div>
            <div className="buttonsclass">
                <button>Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
