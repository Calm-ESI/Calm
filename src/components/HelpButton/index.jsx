import React from "react";
import {motion} from "framer-motion";
import "./style.css"
import questionMark from "../../assets/images/decorations/questionMArk.png"

const HelpButton = ({open}) => {

    return (
        <>
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        layout
                        onClick={open} className="helpButton">

                    <img src={questionMark} alt="modePicture"/>


            </motion.div>
        </>
    );
}
export default HelpButton