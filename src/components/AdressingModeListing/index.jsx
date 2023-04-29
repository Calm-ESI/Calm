import React from "react";
import {motion} from "framer-motion";
import "./style.css"

const AdressingModeListing = ({modesDescription, open}) => {
    const {modeName, modePicture, description} = modesDescription;

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