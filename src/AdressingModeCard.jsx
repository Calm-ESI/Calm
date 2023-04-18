import React from "react";
const AdressingModeCard = ({modeName, modePicture}) => {
  return (
    <>
    <div className="AdressModeCard">
      <img src={modePicture} alt="modePicture" />
      <p>{modeName}</p>
    </div>
    </>
  );
}
export default AdressingModeCard;