import { Box } from '@mui/material'
import React from 'react'
import SignupForm from '../componets/SignupForm'

const Signup = () => {
    return (
        <Box sx={{ bgcolor: '#FFF', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Signup Form</h1>
            <SignupForm />
        </Box>

    )
}

export default Signup