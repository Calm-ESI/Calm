import React from "react";
import {motion} from "framer-motion";

const LearnCard = ({style, img}) => {
    return (
        <>
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        layout
                        className="LearnCard" style={style}>
                <img className="LearnPicture" src={img} alt="LearnPicture"/>
            </motion.div>
        </>
    );
}
export default LearnCard;