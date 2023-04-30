import React from 'react'
import './style.css'

//import icons
import discordIcon from '../../assets/images/icons/discord-icon.png' ;
import emailIcon from '../../assets/images/icons/email-icon.png';
import githubIcon from '../../assets/images/icons/github-icon.png';
import heart from '../../assets/images/decorations/heart.png';
import linkedinIcon from '../../assets/images/icons/linkedin-icon.png';

function Footer() {
  return (
    <>
      <section className="thanks-collaboration-section"> 
        <h2 className="part7-2">
          Thanks for everyone who contributed to this project <img className="ceour-vert" src={heart} alt="court-vert"/>
        </h2>
        <h2 className="part7-3">You can always contribute from
          <a href="https://github.com/Calm-ESI" target="_blank" rel="noopener noreferrer" className=""> here</a>
        </h2>

      </section>

      <footer >
        <div id="email-us-container">
          <h2 className="part7-7">You can reach us out anytime</h2>
          <button className="email-us-button">
            <h1 className="email-us-text">Email us</h1>
            <img className="mail-icon" src={emailIcon} alt='mail-icon'/>
          </button>
        </div>

        <div id='social-media-container'>
          <h2 className="social-media-text">Follow us for updates</h2>
          <div id="social-media-icons-wrapper">
            {/*TODO: add links*/}
            <a href="https://github.com/Calm-ESI/Calm"><img className="git-icon" src={githubIcon} alt='git-icon'/></a>
            <a href=""><img className="discord-icon" src={discordIcon} alt='discord-icon'/></a>
            <a href=""><img className="linkedin-icon" src={linkedinIcon} alt='linkedin-icon'/></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer