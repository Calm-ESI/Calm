import React from "react";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";
import "./style.css"
import HelpOverlay from "../HelpOverlay";
import HelpButton from "../HelpButton";
import HelpPannel from "../HelpPannel";

const HelpSection = ({helpDescription}) => {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
    return (
        <>
            <HelpButton helpDescription={helpDescription} open={openModal}/>
            <AnimatePresence>
                {open && (
                    <HelpOverlay close={closeModal}>
                        <HelpPannel modesDescription={helpDescription} close={closeModal}/>
                    </HelpOverlay>
                )}
            </AnimatePresence>

        </>
    );
}
export default HelpSection;