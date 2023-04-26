import React from "react";
const LearnCard = ({ style, img }) => {
  return (
    <>
      <div className="LearnCard" style={style}>
        <img className="LearnPicture" src={img} alt="LearnPicture"  />
      </div>
    </>
  );
}
export default LearnCard;