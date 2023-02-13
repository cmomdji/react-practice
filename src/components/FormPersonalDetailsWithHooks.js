import React, { Component, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormPersonalDetailsWithHooks(setStep) {
    const [values, setValues] = useState({
        occupation: '',
        city: '',
        bio: ''
    });

    const updateOccupation = (e) => {
        setValues({...values, occupation: e.target.value});
    }

    const updateCity = (e) => {
        setValues({...values, city: e.target.value});
    }

    const updateBio = (e) => {
        setValues({...values, bio: e.target.value});
    }

    return (
        <Box sx={{ padding: 1 }}>
            <h2>Personal Details</h2>

            <TextField 
                id='outlined-basic'
                label='Occupation'
                size='small'
                multiline
                sx={{ margin: 2 }}
                variant='standard'
                onChange={(value) => updateOccupation(value)}
                defaultValue={values.occupation}
            />
            <br/>
            <TextField
                id='outlined-basic'
                label='City'
                size='small'
                multiline
                maxRows={4}
                sx={{ margin: 2 }}
                variant='standard'
                onChange={(value) => updateCity(value)}
                defaultValue={values.city}
            />
            <br/>
            <TextField
                id='outlined-basic'
                label='Bio'
                size='small'
                sx={{ margin: 2 }}
                variant='standard'
                onChange={(value) => updateBio(value)}
                defaultValue={values.bio}
            />
            <br/> 
            <Button 
                variant="text"
                sx={{ margin: 2 }}
                onClick={() => setStep( (prevStep) => prevStep - 1 )}>
                Back
            </Button>
            <Button 
                variant="contained"
                sx={{ margin: 2 }}
                onClick={() => setStep( (prevStep) => prevStep + 1 )}>
                Continue
            </Button>
        </Box>
    )
}