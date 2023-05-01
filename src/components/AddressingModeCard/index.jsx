import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import "./style.css"

import AdressingModeListing from "../AdressingModeListing";
import Overlay from "../Overlay";
import Modal from "../Modal";

const AdressingModeCard = ({modesDescription}) => {
    
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
    return (
        <>
            <AdressingModeListing name={modesDescription.name} imagePath={modesDescription.imagepath}  open={openModal}/>
            <AnimatePresence>
            {open && (<Overlay close={closeModal}>
                <Modal modeName={modesDescription.name} description={modesDescription.description}/>
            </Overlay>
            )}
            </AnimatePresence>
        </>
    );
}
export default AdressingModeCard;