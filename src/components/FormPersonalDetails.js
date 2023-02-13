import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormPersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const {values, handleChange} = this.props;
    return (
      <React.Fragment>
        <h2>Personal Details</h2>

        <TextField 
            id='outlined-basic'
            label='Occupation'
            size='small'
            multiline
            sx={{ margin: 2 }}
            variant='standard'
            onChange={handleChange('occupation')}
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
            onChange={handleChange('city')}
            defaultValue={values.city}
        />
        <br/>
        <TextField
            id='outlined-basic'
            label='Bio'
            size='small'
            sx={{ margin: 2 }}
            variant='standard'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
        />
        <br/>
        <Button 
            variant="text"
            sx={{ margin: 2 }}
            onClick={this.back}>
            Back
        </Button>
        <Button 
            variant="contained"
            sx={{ margin: 2 }}
            onClick={this.continue}>
            Continue
        </Button>
      </React.Fragment>
    )
  }
}

export default FormPersonalDetails
