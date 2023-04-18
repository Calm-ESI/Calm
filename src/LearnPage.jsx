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
        <Learn title={"Get Started"}/>
        <Learn title={"Adressing Modes"}/>
        <Learn title={"Components"}/>
        <Learn title={"Examples"}/>

      </div>
      <Footer></Footer>
    </>
  );
}

export default LearnPage;