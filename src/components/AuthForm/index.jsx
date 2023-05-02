import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./style.css"

const AuthForm = ({currentRoute, redirectRoute, updateCurrentUser}) => {
    
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
        //prevent the form from reloading the page
        e.preventDefault();
        console.log(document.querySelector('.auth-button').disabled);
        document.querySelector('.auth-button').disabled = true;
        //get the form error div
        const formError = document.getElementById('form-error')

        //setup the request
        const URL = process.env.REACT_APP_API_URL + currentRoute;
        
        axios.post(URL, {email, password})
        .then((res)=>{
            const user = res.data.data;

            if(currentRoute === '/register'){
                //if the user just registered
                navitage('/check-email');
                return;
            }
            console.log(user)

            if(currentRoute === '/login' && !user.confirmed){
                formError.innerText = "Confirm your email first!"
                return;
            }

            //set the curernt user in case of success
            updateCurrentUser(user);

            //save the user in local storage
            localStorage.setItem('user', JSON.stringify(user));

            //redirect to the learn page (or any page that comes afterwards)
            navitage('/learn')
        })
        .catch(err => {
            //show the error in the front
            console.log(err)
            if(!err.response.data.message){
                formError.innerText = "Unknown Server error";
            }
            formError.innerText = err.response.data.message;
        }).finally(()=>{
            document.querySelector('.auth-button').disabled = false;
        })
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
            {
                currentRoute === '/login'
                ?
                    <button className='auth-link-button' onClick={()=>{return navitage('/password-forgot')}}>
                        Forgot password?
                    </button>
                : null
            }
        </div>
    )
}

export default AuthForm