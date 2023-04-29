import React, {useState} from "react";
import ComponentsListing from "../ComponentsListing";
import {AnimatePresence} from "framer-motion";
import Overlay from "../Overlay";
import Modal from "../Modal";
import ComponentsModal from "../ComponentsModal";
const ComponentsCard = ({ componentInfo, imageWidth }) => {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
  return (
    <>
        <ComponentsListing componentInfo={componentInfo} open={openModal}/>
        <AnimatePresence>
            {open && (<Overlay close={closeModal}>
                    <ComponentsModal componentInfo={componentInfo}/>
                </Overlay>
            )}
        </AnimatePresence>

      {/*<div className="ComponentsCard">*/}
      {/*  <img src={ComponentPicture} alt="componentPicture" style={{height: imageHeight + '%'}} />*/}
      {/*  <p>{ComponentName}</p>*/}
      {/*</div>*/}
    </>
  );
}
export default ComponentsCard;