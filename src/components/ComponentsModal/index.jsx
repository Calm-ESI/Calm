import React from 'react';
import './style.css';
import {motion} from "framer-motion";
const ComponentsModal = ({ComponentName, componentDescription}) => {
    const variants = {open: {
            opacity: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.2 },
        },
        closed: { opacity: 0 },
    };
    return(
        <motion.div variants={variants}
                    layout className="componentsModal" onClick={(e) => e.stopPropagation()}>
            <motion.p  className="componentsTitle-modal">{ComponentName}</motion.p>
            <p className="components-description">
                {componentDescription}
            </p>
        </motion.div>
    );
}
export default ComponentsModal;