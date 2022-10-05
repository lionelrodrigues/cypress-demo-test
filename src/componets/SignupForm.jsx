import { Box, Button, FormControl, TextField } from '@mui/material'
import React from 'react'

const SignupForm = () => {
    return (
        <Box sx={{ bgcolor: '#FFF', display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <FormControl>
                <TextField id="signup-name" label="Name" variant="outlined" margin='normal' name='name' />
                <TextField id="signup-email" label="Email" variant="outlined" margin='normal' name='email' />
                <TextField id="signup-password" label="Password" variant="outlined" margin='normal' name='password' type='password' />
                <Button
                    id='login-btn'
                    variant='contained' fullWidth={true} type='submit'>Sign up</Button>
            </FormControl>
        </Box >
    )
}

export default SignupForm