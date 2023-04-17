import './Riad.css';
import img from './assets/to-do-list 2.png' ;
import img1 from './assets/Vector.png' ;
import img2 from './assets/heart.png';
import img3 from './assets/Vector123.png';
import img4 from './assets/Vector(2).png';
import img5 from './assets/Vector(3).png';
import AOS from 'aos';
import React, {useEffect} from 'react';
import'aos/dist/aos.css'


function Riad() {
 

  const Part1=()=>{
    return(
        <section className="slogan-container">
           
            <p className="slogan">Slogan will be here</p>
            <div className="logo-container"> 
                <div className="logo">our logo</div> 
                <p className="slogan-description">calM will help you uderstand the basics of how the CPU works and also will go you an insight on more advanced topics with outstanding illustrations</p> 
            </div>
        </section>
    )

  }
  const Part2=()=>{
    return(

        <section className="why-calm-section">
            <h1 className="whycalm ">why calM</h1>
            <div className="txt1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis architecto similique, iure nihil vel illo, sed quidem voluptate odio voluptatem.</div>
        </section>
    )
  }

  const Part3=()=>{
     return(
        <section className="what-we-offer-section">
              <h2 className="part3-1">What we offer</h2>
              <div className="what-we-offer-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ipsum voluptate? Rerum magnam dolorum quaerat, itaque odio aliquam repellendus.</div>

            <img  className='todolist' src={img} alt="to-do list"/>
        </section>
     )


  }
  const Part4=()=>{
    return(
      <>
        <section className="learn-section">
            <h1 className="part4-1">Learn</h1>
            <h3 className="part4-2" >---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h3>
        </section>

          <button className="learn-button">Press me!</button>
      </>
    )
  }
  const Part5=()=>{
    return(
        <section className="part5">
            <div className="part5-1"> 
                <h1 className="emul">Emulation</h1>
                <h2 className="emul-1"> You can write your machine code and execute it</h2>
            </div>

            <div className="part5-2">
                <h1 className="simul">Simulation</h1> 
                <h2 className="simul-1"> You can graphically simulate your program</h2>
            </div>
            
            <button className="part5-3">Let's code</button>
      
       </section>
    )
  }
  const Part6=()=>{
    return(
        <section className="keep-in-touch-section">
            <h1 className="part6-1"> Keep in touch :</h1>
            <div className="discord-server-container">
                <h2 className="discord-title">Discord Server</h2>
                <div className="part6-3"><img   src={img1} alt="discord-logo" width={240}/></div>
                <div className="part6-4">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            </div>
        </section>
    )
  }
  const Part7=()=>{
    return(
      <>
      <section className="thanks-collaboration-section"> 
        <h2 className="part7-2">
          Thanks for everyone who contributed to this project <img className="ceour-vert" src={img2} alt="court-vert"/>
        </h2>
        <h2 className="part7-3">You can always contribute from <a href="/"> here</a></h2>

      </section>

        <Footer></Footer>
      </>
    )
  }

  const Footer = () => {
    return (
      
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
    )
  }
  return (
    <>
      
      <Part1></Part1>
      <Part2></Part2>
      <Part3></Part3>
      <Part4></Part4>
      <Part5></Part5>
      <Part6></Part6>
      <Part7></Part7>
      {/* <Footer></Footer> */}
    </>
    
    
    
  );
}

export default Riad;

