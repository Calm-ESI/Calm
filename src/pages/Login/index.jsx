import React from 'react'
import {AuthForm} from '../../components/'

const Login = ({updateCurrentUser}) => {
    return (
        <AuthForm currentRoute='/login' redirectRoute='/register' updateCurrentUser={updateCurrentUser}/>
    )
}

export default Login