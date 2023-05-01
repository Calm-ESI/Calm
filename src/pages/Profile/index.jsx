import React from 'react'
import { Link } from "react-router-dom";
import { NavBar } from '../../components'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = ({currentUser, updateCurrentUser}) => {
    const navigate = useNavigate();
    // const username = "User1";
    // const email = "email@gmail.com";
    // const score = 200;
    const programs = [
        {
            name: "program1",
            content: "code for program1",
        },
        {
            name: "program2",
            content: "code for program2",
        },
        {
            name: "program3",
            content: "code for program3",
        },
    ]

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
                        {programs.length === 0 ? null : programs.map(program => 
                            <div key={program.name} className="program-container">
                                <h3>{program.name}</h3>
                                <div className="code-container">{program.content}</div>
                            </div>
                        )}
                        <button>Reset Password</button>
                        <button onClick={logout}>Logout</button>
                    </>
                }
                
            </div>
        </>
    )
}

export default Profile