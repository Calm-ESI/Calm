import React from "react";
import Learn from "./Learn";

function LearnPage(props) {
  return (
    <div className="globalContainerLearn">
      <Learn title={"Get Started"}/>
      <Learn title={"Adressing Modes"}/>
      <Learn title={"Components"}/>
      <Learn title={"Examples"}/>

    </div>
  );
}

export default LearnPage;