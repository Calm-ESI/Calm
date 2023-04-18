import Title from "./Title.jsx"
import { Icon } from '@iconify/react';
import cpuFill from '@iconify/icons-bi/cpu-fill';
import getstarted from "./assets/GetStarted.svg"
import cpu from "./assets/cpu-fill.svg"
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import HeroIde from './HeroIde.jsx';
import { motion } from "framer-motion"
import Navbar from "./Navbar.jsx";
import Riad from "./Riad.jsx";

const Hero = ()=>{
    return <>

      <Navbar/>

      <main id="get-started-container" style={{position: "relative", height: "10%"}}>
        <Title/>

        <motion.div
          className="button"
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
        
      <Riad/>
      
    </>
}
export default Hero;
