import React from 'react'
import {AuthForm} from '../../components/'

const Register = () => {
    return (
        <AuthForm currentRoute='/register' redirectRoute='/login'/>
    )
}

export default Register