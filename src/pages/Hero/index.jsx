import "./style.css";
import logoHero from "../../assets/images/logos/logoHero.png"
import Slogan from "../../assets/images/logos/Slogan.png"
//import components
import { NavBar, Title, HeroIde } from "../../components"
import {Footer} from '../../containers'

import getstarted from "../../assets/images/decorations/GetStarted.svg";
import cpu from "../../assets/images/icons/cpu-fill.svg";
// import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import { motion } from "framer-motion"

import to_do_list from '../../assets/images/decorations/to-do-list 2.png' ;
import discordIcon from '../../assets/images/icons/discord-icon.png' ;

const Hero = ()=>{
  const Part1=()=>{
    return(
        <section className="slogan-container">
           
            <img alt="" src={Slogan} className="slogan"/>
            <div className="logo-container"> 
                <div className="logo">
                  <img src={logoHero} className="logoHero" alt="" />
                </div> 
                <p className="slogan-description">calM will help you uderstand the basics of how the CPU works and also will go you an insight on more advanced topics with outstanding illustrations</p> 
            </div>
        </section>
    )

  }
  const Part2=()=>{
    return(

        <section className="why-calm-section">
            <h1 className="whycalm ">why calM</h1>
            <div className="why-calm-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis architecto similique, iure nihil vel illo, sed quidem voluptate odio voluptatem.</div>
        </section>
    )
  }

  const Part3=()=>{
     return(
        <section className="what-we-offer-section">
              <h2 className="what-we-offer">What we offer</h2>
              <div className="what-we-offer-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ipsum voluptate? Rerum magnam dolorum quaerat, itaque odio aliquam repellendus.</div>

            <img  className='todolist' src={to_do_list} alt="to-do list"/>
        </section>
     )


  }
  const Part4=()=>{
    return(
      <>
        <section className="learn-section">
            <h1 className="learn">Learn</h1>
            <h3 className="learn-description" >---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h3>
        </section>

          <button className="learn-button">Press me!</button>
      </>
    )
  }
  const Part5=()=>{
    return(
        <section className="emulation-simulation-section">
            <div className="emulation-container"> 
                <h1 className="emul">Emulation</h1>
                <h2 className="emul-1"> You can write your machine code and execute it</h2>
            </div>

            <div className="simulation-container">
                <h1 className="simul">Simulation</h1> 
                <h2 className="simul-1"> You can graphically simulate your program</h2>
            </div>
            
            <button className="lets-code-button">Let's code</button>
      
       </section>
    )
  }
  const Part6=()=>{
    return(
        <section className="keep-in-touch-section">
            <h1 className="keep-in-touch"> Keep in touch :</h1>
            <div className="discord-server-container">
                <h2 className="discord-title">Discord Server</h2>
                <div className="part6-3"><img   src={discordIcon} alt="discord-logo" width={240}/></div>
                <div className="part6-4">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            </div>
        </section>
    )
  }
  const Part7=()=>{
    return(
      <>
        <Footer></Footer>
      </>
    )
  }

    return <>
      <NavBar/>
      
      <main id="get-started-container" style={{position: "relative", height: "10%"}}>
        <Title/>

        <motion.div
          className="get-started-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          > 
          <img alt="" src={getstarted} style={{
          margin:"1.2em 1em 0 0",
          width:"12em"
          }}/>
          <img alt="" src={cpu} style={{
          margin:"1.2em 0 0 0",
          width:"2em"
          }}/>
        </motion.div>
        
        <HeroIde/>
      </main>
        
      <Part1></Part1>
      <Part2></Part2>
      <Part3></Part3>
      <Part4></Part4>
      <Part5></Part5>
      <Part6></Part6>
      <Part7></Part7>
      
    </>
}
export default Hero;
