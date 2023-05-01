import React from 'react';
import './style.css';
import {motion} from "framer-motion";
const Modal = ({modeName, description}) => {
    
    const variants = {open: {
            opacity: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.2 },
        },
        closed: { opacity: 0 },
    };
    return(
        <motion.div variants={variants}
                    layout className="modal" onClick={(e) => e.stopPropagation()}>
            <motion.p  className="addressingModeTitle-modal">{modeName}</motion.p>
            <p className="mode-description">
                {description}
            </p>
        </motion.div>
    );
}
export default Modal;