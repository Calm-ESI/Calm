import ComponentsCard from "./ComponentsCard";
import IPImage from "./assets/IP.svg"
import CmPic from "./assets/CmPic.svg"
import MarPic from "./assets/MarPic.svg"
import MdrPic from "./assets/MdrPic.svg"
import BusPic from "./assets/busPic.svg"
import sequencerPic from "./assets/sequencerPic.svg"
import AluPic from "./assets/AluPic.svg"
import RegistersPic from "./assets/registersPic.svg"
import flagsPic from "./assets/flagsPic.svg"
import IOControllerPic from "./assets/IOController.svg"
import IOBufferPic from "./assets/IOBuffer.svg"
const Components = () => {
  return (
    <div className="globalContainer">
      <div className="UnitsContainer">
        <p className="title">Memory Unit</p>
        <ComponentsCard ComponentName={"Instruction Pointer"} ComponentPicture={IPImage} />
        <ComponentsCard
          ComponentName={"Central Memory"}
          ComponentPicture={CmPic}
          imageHeight={"65"}
        />
        <ComponentsCard
          ComponentName={"Memory Adress Register"}
          ComponentPicture={MarPic}
          imageHeight={"60"}
        />
        <ComponentsCard
          ComponentName={"Memory Data Register"}
          ComponentPicture={MdrPic}
        />
        <ComponentsCard
          ComponentName={"Data & address buses"}
          ComponentPicture={BusPic}
          imageHeight={"90"}
        />
      </div>

      <div className="UnitsContainer">
        <p className="title">Command Unit</p>
        <ComponentsCard
          ComponentName={"Instruction Reception Unit"}
          ComponentPicture={""}
        />
        <ComponentsCard ComponentName={"The Sequencer"} ComponentPicture={sequencerPic} />
      </div>

      <div className="UnitsContainer">
        <p className="title">Processing Unit</p>
        <ComponentsCard ComponentName={"ALU"} ComponentPicture={AluPic} />
        <ComponentsCard ComponentName={"Registers"} ComponentPicture={RegistersPic} />
        <ComponentsCard ComponentName={"Flag Register"} ComponentPicture={flagsPic} />
      </div>

      <div className="UnitsContainer">
        <p className="title">I/O Unit</p>
        <ComponentsCard ComponentName={"Buffer"} ComponentPicture={IOBufferPic} imageHeight={"60"} />
        <ComponentsCard
          ComponentName={"I/O Controller"}
          ComponentPicture={IOControllerPic}
          imageHeight={"60"}
        />
      </div>
    </div>
  );
};
export default Components;
