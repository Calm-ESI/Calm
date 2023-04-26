import "./style.css";
import logoHero from "../../assets/images/logos/logoHero.png"
import Slogan from "../../assets/images/logos/Slogan.png"
import whyCalm from "../../assets/images/logos/whyCalm.png"
import whatCalmOffers from "../../assets/images/logos/whatCalmOffers.png"
//import components
import {NavBar, Title, HeroIde} from "../../components"
import {Footer} from '../../containers'

import getstarted from "../../assets/images/decorations/GetStarted.svg";
import cpu from "../../assets/images/icons/cpu-fill.svg";
// import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import {motion} from "framer-motion"

import to_do_list from '../../assets/images/decorations/to-do-list 2.png' ;
import discordIcon from '../../assets/images/icons/discord-icon.png' ;

const Hero = () => {
    const Part1 = () => {
        return (
            <section className="slogan-container">

                <img alt="" src={Slogan} className="slogan"/>
                <div className="logo-container">
                    <div className="logo">
                        <img src={logoHero} className="logoHero" alt=""/>
                    </div>
                    <p className="slogan-description">calM will help you uderstand the basics of how the CPU works and
                        also will go you an insight on more advanced topics with outstanding illustrations</p>
                </div>
            </section>
        )

    }
    const Part2 = () => {
        return (

            <section className="why-calm-section">
                <img src={whyCalm} alt="" className="whycalm "/>
                <div className="why-calm-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    architecto similique, iure nihil vel illo, sed quidem voluptate odio voluptatem.
                </div>
            </section>
        )
    }

    const Part3 = () => {
        return (
            <section className="what-we-offer-section">
                <img src={whatCalmOffers} alt="" className="what-we-offer"/>
                <div style={{display: "flex", gap: "7rem"}}>
                    <div className="whatWeOfferCard"></div>
                    <div className="whatWeOfferCard"></div>
                    <div className="whatWeOfferCard"></div>
                </div>
                {/* <div className="what-we-offer-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ipsum voluptate? Rerum magnam dolorum quaerat, itaque odio aliquam repellendus.</div> */}
                {/* <img  className='todolist' src={to_do_list} alt="to-do list"/> */}
            </section>
        )


    }
    const Part4 = () => {
        return (
            <>
                <section className="learn-section">
                    <h1 className="learn">Learn</h1>
                    <p className="learn-description">
                        Enhance your understanding of computer architecture and dive into the inner workings of the calM
                        CPU through our extensive collection of courses and learning materials. Whether you are just
                        starting out or have some experience in the field, our resources are designed to help you take
                        your knowledge and skills to the next level.
                    </p>
                </section>

                <button className="learn-button">Press me!</button>
            </>
        )
    }
    const Part5 = () => {
        return (
            <section className="emulation-simulation-section">
                <div className="emulation-container">
                    <h1 className="emul">Emulation</h1>
                    <p className="emul-1">Write some calM code and emulate it's execution</p>
                </div>

                <div className="simulation-container">
                    <h1 className="simul">Simulation</h1>
                    <p className="simul-1">Give life to your code by animating it's execution</p>
                </div>

                <button className="lets-code-button">Let's code</button>

            </section>
        )
    }
    const Part6 = () => {
        return (
            <section className="keep-in-touch-section">
                <h1 className="keep-in-touch"> Keep in touch :</h1>
                <div className="discord-server-container">
                    <h2 className="discord-title">Discord Server</h2>
                    <div className="part6-3"><img src={discordIcon} alt="discord-logo" width={240}/></div>
                    <div className="part6-4">
                        Join our discord server to get in touch with the community and ask any questions you may have.
                        calM-Bot is waiting for you!
                    </div>
                </div>
            </section>
        )
    }
    const Part7 = () => {
        return (
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
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                transition={{type: "spring", stiffness: 400, damping: 17}}
            >
                <img alt="" src={getstarted} style={{
                    margin: "1.2em 1em 0 0",
                    width: "12em"
                }}/>
                <img alt="" src={cpu} style={{
                    margin: "1.2em 0 0 0",
                    width: "2em"
                }}/>
            </motion.div>

            <HeroIde/>
        </main>

        <Part1></Part1>
        <Part3></Part3>
        <Part4></Part4>
        {/*<Part5></Part5>*/}
        <Part6></Part6>
        <Part7></Part7>

    </>
}
export default Hero;
