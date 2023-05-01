import React from 'react'
import {AuthForm} from '../../components/'

const Register = (updateCurrentUser) => {
    return (
        <AuthForm currentRoute='/register' redirectRoute='/login' updateCurrentUser={updateCurrentUser}/>
    )
}

export default Register