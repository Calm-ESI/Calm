import React from 'react'
import {AuthForm} from '../../components/'

const Login = () => {
    return (
        <AuthForm currentRoute='/login' redirectRoute='/register'/>
    )
}

export default Login