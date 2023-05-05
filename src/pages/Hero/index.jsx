import "./style.css";
import logoHero from "../../assets/images/logos/logoHero.png"
import Slogan from "../../assets/images/logos/Slogan.png"
import whyCalm from "../../assets/images/logos/whyCalm.png"
import whatCalmOffers from "../../assets/images/logos/whatCalmOffers.png"
import esiLogo from "../../assets/images/logos/esiLogo.png"
import learnBrain from "../../assets/images/decorations/brain.png"
import simulationImage from "../../assets/images/decorations/animation.png"
import emulate from "../../assets/images/decorations/coding.png"
import discordIcon from '../../assets/images/icons/discord-icon.png' ;
import getstarted from "../../assets/images/decorations/GetStarted.svg";
import cpu from "../../assets/images/icons/cpu-fill.svg";
import aiChat from "../../assets/images/decorations/aiChat.png";

//import components
import {NavBar, Title, HeroIde} from "../../components"
import {Footer} from '../../containers'
import {motion} from "framer-motion"
import Bot from "../../components/ChatBot";
// import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';


const Hero = () => {
    const Part1 = () => {
        return (
            <section className="slogan-container">

                <img alt="" src={Slogan} className="slogan"/>
                <div className="logo-container">
                    <div className="logo">
                        <img src={logoHero} className="logoHero" alt=""/>
                    </div>
                    <p className="slogan-description">
                        calM is a CPU architecture learning machine designed for
                        educational purposes, offering a simplified representation of fundamental CPU concepts to aid
                        in understanding computer architecture.
                    </p>
                </div>
            </section>
        )

    }
    const Part2 = () => {
        return (

            <section className="why-calm-section">
                <img src={whyCalm} alt="" className="whycalm "/>
                <div className="why-calm-container">
                    <div className="why-calm-description">
                        This project was created by a team of six 2nd-year students from ESI-Alger as
                        part of a class project. The objective was to develop a pedagogical machine with a simulation of
                        code execution to
                        teach computer architecture. We were a team of four teams assigned to develop different projects
                        for the class.
                        We successfully designed and developed the learning platform, which includes the calm machine,
                        with its emulator and simulator to meet the pedagogical goals.
                    </div>
                    <img className="esi-logo" src={esiLogo} alt="esi logo"/>
                </div>

            </section>
        )
    }

    const Part3 = () => {
        return (
            <section className="what-we-offer-section">
                <img src={whatCalmOffers} alt="" className="what-we-offer"/>
                <div className="what-we-offer-container">
                    <p className="what-we-offer-description">
                        Calm machine offers a simple ISA and assembly language. Our platform includes an emulator and
                        simulator for program execution and visualization, along with courses and learning materials for
                        computer architecture.
                    </p>
                    <div className="cardsContainer">
                        <div className="cardsSubContainer">
                            <a href="/Learn" className="whatWeOfferLink">
                                <motion.div
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    transition={{type: "spring", stiffness: 400, damping: 17}}
                                    layout
                                    className="whatWeOfferCard">
                                    <img src={learnBrain} alt="Learn" className="threeIcons"/>
                                    <h1>Learn</h1>
                                </motion.div>
                            </a>
                            <a href="/ide" className="whatWeOfferLink">
                                <motion.div
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    transition={{type: "spring", stiffness: 400, damping: 17}}
                                    layout
                                    className="whatWeOfferCard">
                                    <img src={emulate} alt="Emulate" className="threeIcons"/>
                                    <h1>Emulate</h1>
                                </motion.div>
                            </a>
                        </div>
                        <div className="cardsSubContainer">
                            <a href="/ide" className="whatWeOfferLink">
                                <motion.div
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    transition={{type: "spring", stiffness: 400, damping: 17}}
                                    layout
                                    className="whatWeOfferCard">
                                    <img src={simulationImage} alt="Simulate" className="threeIcons"/>
                                    <h1>Animate</h1>
                                </motion.div>
                            </a>
                        <a href="/ide" className="whatWeOfferLink">
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                transition={{type: "spring", stiffness: 400, damping: 17}}
                                layout
                                className="whatWeOfferCard">
                                <img src={aiChat} alt="Ai Assistant" className="threeIcons"/>
                                <h1>Ai assistant</h1>
                            </motion.div>
                        </a>
                        </div>
                    </div>
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
                        Our learning platform provides a variety of materials to help you understand computer
                        architecture concepts more easily.
                    </p>
                    <motion.div
                        className="learn-button"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                    >
                        <motion.a layout href="/Learn" className="no-underline">Start Studying</motion.a>
                    </motion.div>
                </section>

                {/*<button className="learn-button"> <a href="/Learn" className="no-underline">Start Studying</a></button>*/}

            </>
        )
    }
    const Part5 = () => {
        return (
            <section className="emulation-simulation-section">
                <div className="emulation-container">
                    <h1 className="emul">Emulation</h1>
                    <p className="emul-1">Our website provides an emulator where you can write and execute your CalM
                        assembly code. You can check the results by inspecting various registers and central memory
                        content.</p>
                </div>

                <div className="simulation-container">
                    <h1 className="emul">Animation</h1>
                    <p className="emul-1">After executing your CalM assembly code, you can click "Animate" to watch a
                        captivating animation of your code coming to life within the CalM architecture.</p>
                </div>

                {/*<button className="lets-code-button"><a href="/ide" className="no-underline">Let's code</a></button>*/}
                <motion.div
                    className="lets-code-button"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{type: "spring", stiffness: 400, damping: 17}}
                >
                    <motion.a layout href="/ide" className="no-underline">Let's code</motion.a>
                </motion.div>

            </section>
        )
    }
    const Part6 = () => {
        return (
            <section className="keep-in-touch-section">
                <h1 className="keep-in-touch"> Join the community</h1>
                <div className="discord-server-container">
                    {/*<h2 className="discord-title">Discord Server</h2>*/}
                    <div className="part6-3">
                        <a href="https://discord.gg/DNTfnHQFDm">
                            <img className="discord-image" src={discordIcon} alt="discord-logo" width={120}/>
                        </a>
                    </div>
                    <div className="part6-4">
                        Meet the Calm Team community on our Discord server to connect with like-minded individuals, ask
                        questions, and share your ideas in a supportive and welcoming space.
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
        {/*<img src={arrowGif} alt="Green Arrows" className="greenArrow"/>*/}
        <Part1></Part1>
        <Part3></Part3>
        <Part4></Part4>
        <Part5></Part5>
        <Part6></Part6>
        <Part2></Part2>
        <Part7></Part7>
        <Bot/>
    </>
}
export default Hero;
