import React from "react";
import Learn from "./Learn";
import "./Fares.css";
import Navbar from "./Navbar";
import Title from "./Title";
import Footer from './Footer'

function LearnPage(props) {
  return (
    <>
      <Navbar/>
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