import React from "react";
import LearnTitle from "../../assets/images/logos/LearnTitle.png"
import getStartedImage1 from "../../assets/images/calm/learnImages/play.png"
import componentsImage from "../../assets/images/calm/learnImages/components.png"
import compassImage from "../../assets/images/calm/learnImages/compass.png"
import examplesImage from "../../assets/images/calm/learnImages/examples.png"

// import components
import { NavBar, Title } from "../../components";
import {Learn, Footer} from "../../containers";
import "./style.css";

function LearnPage(props) {
  return (
    <>
      <NavBar/>
      {/* <main id="learn-page-main">
        <Title/>
      </main> */}
      <img src={LearnTitle} className="learnTitle" alt="" />

      <div className="globalContainerLearn">
          <p className="learnIntro">Explore computer architecture and learn about the inner workings of the calM machine through our
              comprehensive courses and learning materials.
          </p>

        <Learn title={"Get Started"} link={"/learn"} text={"Embark on a learning journey with our beginner-friendly " +
            "course and uncover the inner workings of the calM machines."} img={getStartedImage1}/>

        <Learn title={"Adressing Modes"} link={"/learn/addressing-modes"} img={compassImage} text={"Discover how data is" +
            " stored and retrieved from the memory and the different modes used to access information."}/>

        <Learn title={"Components"} link={"learn/components"} img={componentsImage} text={"Get to know the different " +
            "parts that makes the calM machine and how they interact with each other."}/>

        <Learn title={"Examples"} img={examplesImage} text={"A collection of code examples to see how the calM machine " +
            "works in action."} link={"/examples"}/>

      </div>
      <Footer></Footer>
    </>
  );
}

export default LearnPage;