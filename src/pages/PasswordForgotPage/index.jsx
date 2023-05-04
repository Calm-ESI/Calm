import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const PasswordForgotPage = () => {

    const [hasValidated, setHasValidated] = useState(false);
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        //prevent the form from reloading the page
        e.preventDefault();

        //disable the submit button
        document.querySelector('.auth-button').disabled = true;
        
        //send a request to check for entered email
        const URL = process.env.REACT_APP_API_URL + '/check-email';

        axios.post(URL, {email})
        .then(res => {
            const user_id = res.data.data.id
            const URL = process.env.REACT_APP_API_URL + `/reset-password/request/${user_id}`;

            return axios.post(URL)
        })
        .then(res => {
            setHasValidated(true);
        })
        .catch(err => {
            console.log(err);
            document.getElementById('form-error').innerText = err.response.data.message;

        })
        .finally( () => {
            document.querySelector('.auth-button').disabled = false;

        })

    }

    return (
        <>
            <div className='auth-form-container'>
                    <h2>Password Reset Page</h2>
                    {
                        hasValidated 
                        ?
                        <>
                            <h2>Password reset link has been sent to your email!</h2>
                            <p>Check your inbox and follow the the link</p>
                        </>
                        :
                        <>
                            <h2 id='form-error'> </h2>

                            <form className='auth-form'>
                                
                                
                                <label className='auth-form-label' htmlFor="email">email</label>
                                <input className='auth-form-input' type='email' id='email' placeholder='example@host.com' name='email' value={email} onChange={handleEmailChange}/>

                                <button className='auth-button' type="submit" onClick={handleSubmit}>Reset Password</button>

                            </form>
                        </>
                    }
                </div>
        </>
    )
}

export default PasswordForgotPage