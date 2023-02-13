import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

  render() {
    const {values, handleChange} = this.props;
    return (
        <Box sx={{ padding: 1 }}>
            <h2>User Details</h2>

            <TextField 
                id='outlined-basic'
                label='First Name'
                size='small'
                multiline
                sx={{ margin: 2 }}
                variant='standard'
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
            />
            <br/>
            <TextField
                id='outlined-basic'
                label='Last Name'
                size='small'
                multiline
                maxRows={4}
                sx={{ margin: 2 }}
                variant='standard'
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
            />
            <br/>
            <TextField
                id='outlined-basic'
                label='Email'
                size='small'
                sx={{ margin: 2 }}
                variant='standard'
                onChange={handleChange('email')}
                defaultValue={values.email}
            />
            <br/> 
            <Button 
                variant="contained"
                sx={{ margin: 2 }}
                onClick={this.continue}>
                Continue
            </Button>
        </Box>
    )
  }
}

export default FormUserDetails
