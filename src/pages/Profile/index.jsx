import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { NavBar } from '../../components'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ProgramContainer } from '../../components';
import { motion } from 'framer-motion';
import {Footer} from "../../containers";

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

                        <div className="profile-info-container">
                            <h1 className='profile-title'>Profile Information</h1>
                        <div style={{ padding: "1rem"}}>
                            <p>Email: {currentUser.email}</p>
                            <p>Score: {currentUser.score}</p>

                        </div>
                            <p>Saved Programs</p>
                        {programs === null 
                            ? <p>Loading programs...</p>
                            : programs.length === 0 
                                ? 
                                    <p>No programs saved for this profile!</p>
                                :
                                <div className="program-container">
                                {
                                    programs.slice(0).reverse().map(program =>
                                        <ProgramContainer key={program.id} program={program}
                                                          removeProgram={removeProgram} userId={currentUser.id}/>
                                    )
                                }
                                </div>
                        }
                        </div>
                        

                        <div className='buttons-container'>
                            <motion.button className='profile-button'
                                           onClick={handlePasswordResetRequest}
                                           whileHover={{scale: 1.1}}
                                           whileTap={{scale: 0.9}}
                                           transition={{type: "spring", stiffness: 400, damping: 17}}
                            >Reset Password</motion.button>
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                transition={{type: "spring", stiffness: 400, damping: 17}}
                                className='profile-button'
                                onClick={logout}>Logout</motion.button>
                        </div>
                    </>
                }
                
                
            </div>
            <Footer/>
        </>
    )
}

export default Profile
