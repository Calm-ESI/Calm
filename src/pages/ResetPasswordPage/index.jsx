import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios';

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    //get the reset token
    const {token} = useParams();

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasConfirmed, setHasConfirmed] = useState(false);

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        //prevent the form from reloading the page
        e.preventDefault();
        document.querySelector('.auth-button').disabled = true;

        //get the form error div
        const formError = document.getElementById('form-error')

        if(newPassword !== confirmPassword){
            formError.innerText = "Passwords mismatch! Check again";
            return;
        }

        //setup the validation URL
        const URL = process.env.REACT_APP_API_URL + `/reset-password/${token}`;

        axios.post(URL, {newPassword, token})
        .then(response => {
            setHasConfirmed(true);
        })
        .catch(err => {
            console.log(err);
            formError.innerText = "Server error, please try again";
        })
        .finally(()=>{
            document.querySelector('.auth-button').disabled = false;
        })
    }
    return (
        <>
            <div className='auth-form-container'>
                <h2>Password Reset Page</h2>
                {
                    hasConfirmed 
                    ?
                    <>
                        <h2>Password has been reset successfully! You can go to the login page from <Link to="/login">here</Link>.</h2>
                    </>
                    :
                    <>
                        <h2 id='form-error'> </h2>

                        <form className='auth-form'>
                            
                            <label className='auth-form-label' htmlFor="new-password">New password:</label>
                            <input className='auth-form-input' type='password' id='new-password' placeholder='***********************' name='password' value={newPassword} onChange={handleNewPasswordChange}/>

                            <label className='auth-form-label' htmlFor="confirm-password">Confirm password:</label>
                            <input className='auth-form-input' type='password' id='confirm-password' placeholder='***********************' name='password' value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                        
                            <button className='auth-button' type="submit" onClick={handleSubmit}>Reset Password</button>

                        </form>

                        <button className='auth-link-button' onClick={()=>{return navigate('/login')}}>
                            Cancel? Go to the <Link to="/login">login</Link> page
                        </button>
                    </>
                }
            </div>
        </>
    )
}

export default ResetPasswordPage