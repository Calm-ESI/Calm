import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProgramContainer = ({userId, program, removeProgram}) => {
    console.log("program",program)
    const navigate = useNavigate();
    
    const handleDeleteProgram = (e) => {
        // const program = programs.filter(program => program.name === e.target)
        
        const URL = process.env.REACT_APP_API_URL + `/user/${userId}/code/delete?id=${program.id}`
        
        axios.delete(URL)
        .then(response => {
            console.log(response);
            removeProgram(program);
        })
        .catch(err => {
            console.log(err);
            alert("Failed to delete program!")
        })
    }

    const handleEditProgram = (e) => {
        navigate('/ide', {state: {editMode: {isEditMode: true, programName: program.name, programId: program.id}, code: program.content}})
    }
    
    return (
        <div key={program.name} className="program-container">
            <img src="" alt="delete button" onClick={handleDeleteProgram} />
            <img src="" alt="edit button" onClick={handleEditProgram} />
            <h3>{program.name}</h3>
            <div className="code-container">
                {program.content.split(/\n/).map( (line, index) => 
                    <p>{line}</p>    
                )}
            </div>
        </div>
    )
}

export default ProgramContainer