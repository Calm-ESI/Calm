import AdressingModeCard from "./AdressingModeCard";
import immediatePic from "./assets/immediate.png";
import directPic from "./assets/direct.png";
import indirectPic from "./assets/indirect.png";
import rightArrowPic from "./assets/right-arrow.png";
import doubleArrowPic from "./assets/double-right-arrow.png";
import basedOnPic from "./assets/based.png";
import NavBar from "./Navbar";

const AdressingModes = () => {
  return (
    <>
      <NavBar/>
      <div className="globalContainer">
        <div className="AdressModeCardsContainer">
          <p className="title">Adressing Modes</p>
          <AdressingModeCard modeName={"Immediate"} modePicture={immediatePic} />
          <AdressingModeCard modeName={"Direct"} modePicture={directPic} />
          <AdressingModeCard modeName={"Indirect"} modePicture={indirectPic} />
          <AdressingModeCard modeName={"Based"} modePicture={basedOnPic} />
          <AdressingModeCard modeName={"Indexed"} modePicture={""} />
          <AdressingModeCard modeName={"Based Indexed"} modePicture={""} />
          <AdressingModeCard
            modeName={"Shift on 8 bits"}
            modePicture={rightArrowPic}
          />
          <AdressingModeCard
            modeName={"Shift on 16 bits"}
            modePicture={doubleArrowPic}
          />
        </div>
      </div>
    </>
  );
};
export default AdressingModes;
