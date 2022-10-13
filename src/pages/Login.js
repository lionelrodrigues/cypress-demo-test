import Box from '@mui/material/Box';
import React from 'react'
import LoginForm from '../componets/LoginForm';

const Login = () => {
    return (
        <Box sx={{ bgcolor: '#FFF', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            <h1>LOGIN</h1>
            <LoginForm />
        </Box>

    )
}

export default Login