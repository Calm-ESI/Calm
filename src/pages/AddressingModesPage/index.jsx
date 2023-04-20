//import components
import { NavBar, AddressingModeCard } from "../../components";

//import images
import basedOnPic from "../../assets/images/calm/addressing-modes/based.png";
import directPic from "../../assets/images/calm/addressing-modes/direct.png";
import doubleArrowPic from "../../assets/images/calm/addressing-modes/double-right-arrow.png";
import immediatePic from "../../assets/images/calm/addressing-modes/immediate.png";
import indirectPic from "../../assets/images/calm/addressing-modes/indirect.png";
import rightArrowPic from "../../assets/images/calm/addressing-modes/right-arrow.png";

const AdressingModes = () => {
  return (
    <>
      <NavBar/>
      <div className="globalContainer">
        <div className="AdressModeCardsContainer">
          <p className="title">Adressing Modes</p>
          <AddressingModeCard modeName={"Immediate"} modePicture={immediatePic} />
          <AddressingModeCard modeName={"Direct"} modePicture={directPic} />
          <AddressingModeCard modeName={"Indirect"} modePicture={indirectPic} />
          <AddressingModeCard modeName={"Based"} modePicture={basedOnPic} />
          <AddressingModeCard modeName={"Indexed"} modePicture={""} />
          <AddressingModeCard modeName={"Based Indexed"} modePicture={""} />
          <AddressingModeCard
            modeName={"Shift on 8 bits"}
            modePicture={rightArrowPic}
          />
          <AddressingModeCard
            modeName={"Shift on 16 bits"}
            modePicture={doubleArrowPic}
          />
        </div>
      </div>
    </>
  );
};
export default AdressingModes;
