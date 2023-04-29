import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./style.css"

const AuthForm = ({currentRoute, redirectRoute}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navitage = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formError = document.getElementById('form-error')
        const URL = process.env.REACT_APP_API_URL + currentRoute;
console.log(URL)
        axios.post(URL, {email, password})
        .then(()=>{navitage('/learn')})
        .catch(err => {formError.innerText = err.response.data.message})
    }

    return (
        <div className='auth-form-container'>
            <h2>{currentRoute === '/login' ? "Welcome to Calm Platform!" : "Get your new account!"}</h2>
            <h2 id='form-error'> </h2>
            <form className='auth-form'>
                <label className='auth-form-label' htmlFor="email">email</label>
                <input className='auth-form-input' type='email' id='email' placeholder='example@host.com' name='email' value={email} onChange={handleEmailChange}/>
            
                <label className='auth-form-label' htmlFor="password">password</label>
                <input className='auth-form-input' type='password' id='password' placeholder='***********************' name='password' value={password} onChange={handlePasswordChange}/>
                
                <button className='auth-button' type="submit" onClick={handleSubmit}>{currentRoute === '/login' ? "Login" : "Register"}</button>
            </form>
            <button className='auth-link-button' onClick={()=>{return navitage(redirectRoute)}}>
                {currentRoute === '/login' ? "Don't have an account? Register" : "Already have an account? Login"}
            </button>
        </div>
    )
}

export default AuthForm