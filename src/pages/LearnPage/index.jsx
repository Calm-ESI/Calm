import React from "react";

// import components
import { NavBar, Title } from "../../components";
import {Learn, Footer} from "../../containers";
import "./style.css";

function LearnPage(props) {
  return (
    <>
      <NavBar/>
      <main id="learn-page-main">
        <Title/>
      </main>

      <div className="globalContainerLearn">
        <Learn title={"Get Started"} link={"/learn"}/>
        <Learn title={"Adressing Modes"} link={"/learn/addressing-modes"}/>
        <Learn title={"Components"} link={"learn/components"}/>
        <Learn title={"Examples"}/>

      </div>
      <Footer></Footer>
    </>
  );
}

export default LearnPage;