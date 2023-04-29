//import components
import {AddressingModeCard, ComponentsCard, NavBar} from "../../components/"

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
import {CUnit} from "../../Constants/componentsDescription";
import {PUnit} from "../../Constants/componentsDescription";
import {MUnit} from "../../Constants/componentsDescription";
import {IOUnit} from "../../Constants/componentsDescription";
import ComponentsListing from "../../components/ComponentsListing";


const Components = () => {
  return (
    <>
      <NavBar/>
      <div className="globalContainer">
        <div className="UnitsContainer">
          <p className="title">Memory Unit</p>
          {/*<ComponentsCard ComponentName={"Instruction Pointer"} ComponentPicture={IPImage} />*/}
          {/*<ComponentsCard*/}
          {/*  ComponentName={"Central Memory"}*/}
          {/*  ComponentPicture={CmPic}*/}
          {/*  imageHeight={"65"}*/}
          {/*/>*/}
          {/*<ComponentsCard*/}
          {/*  ComponentName={"Memory Adress Register"}*/}
          {/*  ComponentPicture={MarPic}*/}
          {/*  imageHeight={"60"}*/}
          {/*/>*/}
          {/*<ComponentsCard*/}
          {/*  ComponentName={"Memory Data Register"}*/}
          {/*  ComponentPicture={MdrPic}*/}
          {/*/>*/}
          {/*<ComponentsCard*/}
          {/*  ComponentName={"Data & address buses"}*/}
          {/*  ComponentPicture={BusPic}*/}
          {/*  imageHeight={"90"}*/}
          {/*/>*/}
          {MUnit.map( (item) => (
              <ComponentsCard componentInfo={item} key={item.id}/>)
          )}
        </div>

        <div className="UnitsContainer">
          <p className="title">Command Unit</p>
          {/*<ComponentsCard*/}
          {/*  ComponentName={"Instruction Reception Unit"}*/}
          {/*  ComponentPicture={iruPic}*/}
          {/*/>*/}
          {/*<ComponentsCard ComponentName={"The Sequencer"} ComponentPicture={sequencerPic} />*/}
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
