import React from "react";
import {motion} from "framer-motion";
import "./style.css"
import SaveIcon from "../../assets/images/decorations/save.png"
import axios from "axios";

const SaveCodeButton = ({code, currentUser, editMode}) => {

    const saveCode = (e) => {
        
        if(!currentUser || editMode.programId < 0){
            alert("You have to login to be able to save the program to your account");
            return;
        }
        
        console.log("Saving your code..."); 
        // console.log(code) isEditMode
        const URL = process.env.REACT_APP_API_URL+`/user/${currentUser.id}/code` + 
            (editMode.isEditMode === true ? "/edit" : "/add")
        
        if(editMode.isEditMode === true){
            axios.put(URL, {id: editMode.programId,code})
            .then(res => {
                console.log(res);
                alert(`Program "${editMode.programName}" updated successfully`);
            })
            .catch(err => {
                console.log(err);
                alert("Program update failed!");
            })
        }else{
            
            const programName = prompt("Give a name to your program:");
            if(programName === null){
                alert("Can't save a program without a name!");
                throw new Error("Can't save a program without a name!");
            }

            axios.post(URL, {code, name: programName})
            .then(res => {
                console.log(res)
                alert("Your code has been saved successfully!")
            })
            .catch(err => {
                console.log(err);
                alert("Program save failed!");
            })
        }
    }

    return (
        <>
            <motion.div whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        layout
                        className="save-code-button"
                        onClick={saveCode}
                        >

                    <img src={SaveIcon} alt="modePicture"/>

            </motion.div>
        </>
    );
}
export default SaveCodeButton