import React from "react";
import LearnTitle from "../../assets/images/logos/LearnTitle.png"
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
        <Learn title={"Get Started"} link={"/learn"} text={"Embark on a learning journey with our beginner-friendly " +
            "course and uncover the inner workings of the calM machines."}/>
        <Learn title={"Adressing Modes"} link={"/learn/addressing-modes"}/>
        <Learn title={"Components"} link={"learn/components"}/>
        <Learn title={"Examples"} link={"/examples"}/>


      </div>
      <Footer></Footer>
    </>
  );
}

export default LearnPage;