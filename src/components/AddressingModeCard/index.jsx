import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import "./style.css"
import AdressingModeListing from "../AdressingModeListing";
import Overlay from "../Overlay";
import Modal from "../Modal";

const AdressingModeCard = ({modesDescription}) => {
    const [open, setOpen] = useState(false);
    const{modeName, modePicture, description} = modesDescription;
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
    return (
        <>
            <AdressingModeListing modesDescription={modesDescription} modePicture={modePicture} description={description}
            modeName={modeName} open={openModal}/>
            <AnimatePresence>
            {open && (<Overlay close={closeModal}>
                <Modal modesDescription={modesDescription}/>
            </Overlay>
            )}
            </AnimatePresence>
            {/*<motion.div transition={{layout: {duration: "0.5s", type: "spring"}}} layout*/}
            {/*            onClick={() => setIsOpen(!isOpen)} className="AdressModeCard">*/}

            {/*    {!isOpen && (*/}
            {/*        <>*/}
            {/*        <img src={modePicture} alt="modePicture"/>*/}
            {/*        <motion.p layout="position" className="addressingModeTitle">{modeName}</motion.p>*/}
            {/*        </>*/}
            {/*    )}*/}

            {/*    <AnimatePresence>*/}
            {/*        {isOpen && (*/}
            {/*            <>*/}
            {/*                <motion.div onClick={() => setIsOpen(!isOpen)} initial={{opacity: 0}} animate={{opacity: 1}}*/}
            {/*                            layout className="expanded-card">*/}
            {/*                    <motion.p layout className="addressingModeTitle">{modeName}</motion.p>*/}
            {/*                    <p className="mode-description">*/}
            {/*                        {description}*/}
            {/*                    </p>*/}
            {/*                </motion.div>*/}
            {/*            </>*/}
            {/*        )}*/}
            {/*    </AnimatePresence>*/}
            {/*</motion.div>*/}
        </>
    );
}
export default AdressingModeCard;