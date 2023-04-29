import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import "./style.css"

const AdressingModeListing = ({modesDescription, open}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {modeName, modePicture, description} = modesDescription;
    const openModel = () => {
        setIsOpen(true);
    }
    const closeModel = () => {
        setIsOpen(false);
    }
    return (
        <>
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        layout
                        onClick={open} className="AdressModeListing">

                <img src={modePicture} alt="modePicture"/>
                <motion.p layout="position" className="addressingModeTitle">{modeName}</motion.p>


            </motion.div>
        </>
    );
}
export default AdressingModeListing