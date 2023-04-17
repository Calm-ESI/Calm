import React from "react";
const ComponentsCard = ({ ComponentName, ComponentPicture, imageHeight, imageWidth }) => {
  return (
    <>
      <div className="ComponentsCard">
        <img src={ComponentPicture} alt="componentPicture" style={{height: imageHeight + '%'}} />
        <p>{ComponentName}</p>
      </div>
    </>
  );
}
export default ComponentsCard;