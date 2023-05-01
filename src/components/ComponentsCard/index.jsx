import React, {useState} from "react";
import ComponentsListing from "../ComponentsListing";
import {AnimatePresence} from "framer-motion";
import Overlay from "../Overlay";
import ComponentsModal from "../ComponentsModal";

const ComponentsCard = ({ componentInfo }) => {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
  return (
    <>
        <ComponentsListing name={componentInfo.name} imagepath={componentInfo.imagepath} imageHeight={componentInfo.imageHeight} open={openModal}/>
        <AnimatePresence>
            {open && (<Overlay close={closeModal}>
                    <ComponentsModal ComponentName={componentInfo.name} componentDescription={componentInfo.description}/>
                </Overlay>
            )}
        </AnimatePresence>
    </>
  );
}
export default ComponentsCard;