import React, {useState} from "react";
import {motion} from "framer-motion";
import "./style.css"
const ComponentsListing = ({ componentInfo,open, imageWidth }) => {
    const{ComponentName, ComponentPicture, imageHeight, componentDescription} = componentInfo;

    return (
        <>
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        layout
                        onClick={open} className="ComponentsListing">
                <img src={ComponentPicture} alt="componentPicture" style={{height: imageHeight + '%'}} />
                <motion.p>{ComponentName}</motion.p>
            </motion.div>
        </>
    );
}
export default ComponentsListing;