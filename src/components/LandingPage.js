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
            <h1>Welcome to FrameFind</h1>
            </div>
            <div className="littlemore">
                Photography is a art of capturing images using camera. <br /> It can convey emotions,tell stories and can preserve memories
            </div>
            <div className="buttonsclass">
              <br />
                <button id='started' >Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
