//import components
import {AddressingModeCard, ComponentsCard, NavBar} from "../../components/"
import './style.css';

//import images
import AluPic from "../../assets/images/calm/components/AluPic.svg"
import BusPic from "../../assets/images/calm/components/busPic.svg"
import CmPic from "../../assets/images/calm/components/CmPic.svg"
import IOBufferPic from "../../assets/images/calm/components/IOBuffer.svg"
import IOControllerPic from "../../assets/images/calm/components/IOController.svg"
import IPImage from "../../assets/images/calm/components/IP.svg"
import flagsPic from "../../assets/images/calm/components/flagsPic.svg"
import MarPic from "../../assets/images/calm/components/MarPic.svg"
import MdrPic from "../../assets/images/calm/components/MdrPic.svg"
import RegistersPic from "../../assets/images/calm/components/registersPic.svg"
import sequencerPic from "../../assets/images/calm/components/sequencerPic.svg"
import iruPic from "../../assets/images/calm/components/IRU.svg"
import calmArchi from "../../assets/images/calm/calmArchitecture.svg"
import {CUnit} from "../../Constants/componentsDescription";
import {PUnit} from "../../Constants/componentsDescription";
import {MUnit} from "../../Constants/componentsDescription";
import {IOUnit} from "../../Constants/componentsDescription";
import ComponentsListing from "../../components/ComponentsListing";
import React from "react";


const Components = () => {
  return (
    <>
      <NavBar/>
      <div className="globalContainer">
        <div className="imageContainer">
            <p className="title">calM Architecture</p>
          <img src={calmArchi} alt="calm Architecture Picture" className="calmArchi"/>
        </div>
        <div className="UnitsContainer">
          <p className="title">Memory Unit</p>
          {MUnit.map( (item) => (
              <ComponentsCard componentInfo={item} key={item.id}/>)
          )}
        </div>

        <div className="UnitsContainer">
          <p className="title">Command Unit</p>

          {CUnit.map( (item) => (
              <ComponentsCard componentInfo={item} key={item.id}/>)
          )}
        </div>

        <div className="UnitsContainer">
          <p className="title">Processing Unit</p>
          {/*<ComponentsCard ComponentName={"ALU"} ComponentPicture={AluPic} />*/}
          {/*<ComponentsCard ComponentName={"Registers"} ComponentPicture={RegistersPic} />*/}
          {/*<ComponentsCard ComponentName={"Flag Register"} ComponentPicture={flagsPic} />*/}
          {PUnit.map( (item) => (
              <ComponentsCard componentInfo={item} key={item.id}/>)
          )}
        </div>

        <div className="UnitsContainer">
          <p className="title">I/O Unit</p>
          {/*<ComponentsCard ComponentName={"Buffer"} ComponentPicture={IOBufferPic} imageHeight={"60"} />*/}
          {/*<ComponentsCard*/}
          {/*  ComponentName={"I/O Controller"}*/}
          {/*  ComponentPicture={IOControllerPic}*/}
          {/*  imageHeight={"60"}*/}
            {IOUnit.map( (item) => (
                <ComponentsCard componentInfo={item} key={item.id}/>)
            )}
        </div>
      </div>
    
    </>
  );
};
export default Components;
