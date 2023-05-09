import React from "react";
import LearnTitle from "../../assets/images/logos/LearnTitle.png"
import getStartedImage1 from "../../assets/images/calm/learnImages/play.png"
import componentsImage from "../../assets/images/calm/learnImages/components.png"
import compassImage from "../../assets/images/calm/learnImages/compass.png"
import examplesImage from "../../assets/images/calm/learnImages/examples.png"
import docimage from "../../assets/images/calm/learnImages/docs-icon.png"
import exoimage from "../../assets/images/calm/learnImages/exo-icon.png"


// import components
import { NavBar } from "../../components";
import {Learn, Footer} from "../../containers";
import "./style.css";
import Bot from "../../components/ChatBot";

function LearnPage(props) {
  return (
    <>
      <NavBar/>
      <img src={LearnTitle} className="learnTitle" alt="" />

      <div className="globalContainerLearn">
          <p className="learnIntro">Explore computer architecture and learn about the inner workings of the calM machine through our
              comprehensive courses and learning materials.
          </p>

          <Learn title={"Get Started"} link={"https://drive.google.com/file/d/1ZlKbyf4KpuEfLZPqDI3ZPrZbb5BLvtqE/view?usp=share_link"} text={"Embark on a learning journey with our beginner-friendly " +

              "course and uncover the inner workings of the calM machines."} img={getStartedImage1}/>

          <Learn title={"Adressing Modes"} link={"/learn/addressing-modes"} img={compassImage} text={"Discover how data is" +
              " stored and retrieved from the memory and the different modes used to access information."}/>

          <Learn title={"Architecture"} link={"learn/components"} img={componentsImage} text={"Get to know the different " +
              "parts that makes the calM machine and how they interact with each other."}/>

          <Learn title={"Examples"} img={examplesImage} text={"A collection of code examples we designed carefully to show you how the calM machine" +
              "works in action, you can execute them !"} link={"/examples"}/>
          <Learn title={"Exercises"} img={exoimage} text={"Discover a comprehensive range of exercises, ranked " +
              "by levels, to strengthen your understanding and master the inner workings of the calM machine."} link={"/learn/Exercices"}/>
          <Learn title={"Documentation"} download={1} img={docimage} text={"The documentation describes the calM machine architecture and its organization, instructions set architecture, and execution process."
              +"The appendix provides additional resources for those interested in learning more."} link={"https://drive.google.com/uc?export=download&id=1_fxKeCJDMvdTauFxsgz9YGHYVNU0GHeb"}/>

      </div>
        <Bot/>
      <Footer></Footer>
    </>
  );
}

export default LearnPage;


