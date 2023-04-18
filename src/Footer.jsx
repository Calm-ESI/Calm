import React from 'react'

import img1 from './assets/Vector.png' ;
import img2 from './assets/heart.png';
import img3 from './assets/Vector123.png';
import img4 from './assets/Vector(2).png';
import img5 from './assets/Vector(3).png';


function Footer() {
  return (
    <>
      <section className="thanks-collaboration-section"> 
        <h2 className="part7-2">
          Thanks for everyone who contributed to this project <img className="ceour-vert" src={img2} alt="court-vert"/>
        </h2>
        <h2 className="part7-3">You can always contribute from <a href="/"> here</a></h2>

      </section>

      <footer >
        <div id="email-us-container">
          <h2 className="part7-7">You can reach us out anytime</h2>
          <button className="email-us-button">
            <h1 className="email-us-text">Email us</h1>
            <img className="mail-icon" src={img4} alt='mail-icon'/>
          </button>
        </div>

        <div id='social-media-container'>
          <h2 className="social-media-text">Follow us for updates</h2>
          <div id="social-media-icons-wrapper">
            <img className="git-icon" src={img3} alt='git-icon'/>
            <img className="discord-icon" src={img1} alt='discord-icon'/>
            <img className="linkedin-icon" src={img5} alt='linkedin-icon'/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer