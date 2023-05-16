import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const Example = ({title, content}) => {

    const navigate = useNavigate();
    
    const goToExample = (e) => {
        navigate('/ide', {state: {editMode: {isEditMode: true, programName: null, programId: -1}, code: content}})
    }

    return (
        <>
            <div class="examples">
                <p>{title}</p>
                <motion.div
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{type: "spring", stiffness: 400, damping: 17}}
                    class="execButton"
                    onClick={goToExample}>
                    Execute
                </motion.div>
            </div>
        </>
    )
}

export default Example