import React from "react";
import {motion} from "framer-motion";
import "./style.css"

const AdressingModeListing = ({name, imagePath, open}) => {

    console.log(imagePath);
    return (
        <>
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        layout
                        onClick={open} className="AdressModeListing">

                <img src={`${imagePath}`} alt="modePicture"/>
                <motion.p layout="position" className="addressingModeTitle">{name}</motion.p>


            </motion.div>
        </>
    );
}
export default AdressingModeListing