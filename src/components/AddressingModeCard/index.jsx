import React from "react";
import "./style.css"
const AdressingModeCard = ({modeName, modePicture}) => {
  return (
    <>
    <div className="AdressModeCard">
      <img src={modePicture} alt="modePicture" />
      <p className="addressingModeTitle">{modeName}</p>
    </div>
    </>
  );
}
export default AdressingModeCard;