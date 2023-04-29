import React from "react";
import './style.css'
import {motion} from "framer-motion";

const Overlay = ({children, close}) => {
    const variants = {
        open: { backgroundColor: "rgba(0,0,0,0.6)" },
        closed: { backgroundColor: "rgba(0,0,0,0)" },
    };
    return (
        <>
            <motion.div className="overlay" onClick={close} variants={variants} initial={"closed"} exit={"closed"}
                        animate={"open"} key={"overlay"}>
                {children}<
                /motion.div>
        </>
    );

}
export default Overlay;