import React, { useState } from 'react'
import { TextField, FormControl, Button } from '@mui/material'
import Box from '@mui/material/Box';

const LoginForm = () => {

    const [formData, handleFormData] = useState({
        email: '', password: ''
    })

    const handleFormChange = (event) => {
        let { name, value } = event.target
        handleFormData({
            ...formData, [name]: value
        })
    }


    const apiCall = () => {
        fetch('http://localhost:3040/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        apiCall()

    }
    return (
        <Box sx={{ bgcolor: '#FFF', display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }} >
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <TextField id="login-email" label="Email" variant="outlined" margin='normal' name='email' value={formData.email} onChange={handleFormChange} />
                    <TextField id="login-password" label="Password" name='password' type="password" variant="outlined" margin='normal' value={formData.password} onChange={handleFormChange} />
                    <Button
                        id='add-btn'
                        variant='contained' fullWidth={true} type='submit'>LOG IN</Button>
                </FormControl>
            </form>
        </Box>

    )
}

export default LoginForm