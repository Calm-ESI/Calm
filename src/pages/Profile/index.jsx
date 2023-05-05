import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { NavBar } from '../../components'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ProgramContainer } from '../../components';

const Profile = ({currentUser, updateCurrentUser}) => {
    const navigate = useNavigate();
    const [programs, setPrograms] = useState(null);
    
    useEffect( () => {
        if(currentUser === null) return;
        
        const URL = process.env.REACT_APP_API_URL + `/user/${currentUser.id}/code/all`;

        axios.get(URL)
        .then((response) => {
            console.log(response.data.data);
            setPrograms(response.data.data);
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to load programs... Please try again");
        });
    }, [currentUser]);

    const handlePasswordResetRequest = (e) => {
        const URL = process.env.REACT_APP_API_URL + `/reset-password/request/${currentUser.id}`;

        axios.post(URL)
        .then(response =>{
            navigate('/reset-password/email-sent');
        })
        .catch(error =>{
            console.log(error);
            alert("Request failed, please try again.");
        })
    }

    const logout = () => {
        const URL = process.env.REACT_APP_API_URL + '/logout';
        axios.post(URL)
        .then(res => {
            updateCurrentUser(null);
            localStorage.removeItem('user');
            navigate('/');
        })
        .catch(err => {
            console.log(err);
            alert("Logout Failed, server isn't responding");
        })
    }

    const removeProgram = (targetProgram) => {
        setPrograms(programs.filter(program => program.id !== targetProgram.id))
    }

    return (
        <>
            <NavBar />
            <div className='profile-container'>
                {!currentUser 
                    ? 
                    <>
                        <h1 className='profile-title'>No user is logged in</h1> 
                        <p>You can login <Link to="/login">here</Link></p>
                    </>
                    : 
                    <>
                        <h1 className='profile-title'>Profile Information</h1>
                        <p>Email: {currentUser.email}</p>
                        <p>Score: {currentUser.score}</p>
                        <p>Saved programs:</p>
                        {programs === null 
                            ? <p>Loading programs...</p>
                            : programs.length === 0 
                                ? 
                                    <p>No programs saved for this profile!</p>
                                : 
                                    programs.slice(0).reverse().map( program => 
                                        <ProgramContainer key={program.id} program={program} removeProgram={removeProgram} userId={currentUser.id}/>
                                    )
                            
                        }
                        

                        <div className='buttons-container'>
                            <button className='profile-button' onClick={handlePasswordResetRequest}>Reset Password</button>
                            <button className='profile-button' onClick={logout}>Logout</button>
                        </div>
                    </>
                }
                
                
            </div>
        </>
    )
}

export default Profile
