import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemText } from '@mui/material';

export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        // TODO: Process form by sending to API (django backend)
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values: { firstName, lastName, email, 
        occupation, city, bio } } = this.props;
    return (
        <Box sx={{ padding: 1 }}>
            <h2>Confirm</h2>

            <List>
                <ListItem>
                    <ListItemText 
                        primary="First Name"
                        secondary={firstName}                    
                    />
                </ListItem>

                <ListItem>
                    <ListItemText 
                        primary="Last Name"
                        secondary={lastName}                    
                    />
                </ListItem>

                <ListItem>
                    <ListItemText 
                        primary="Email"
                        secondary={email}                    
                    />
                </ListItem>

                <ListItem>
                    <ListItemText 
                        primary="Occupation"
                        secondary={occupation}                    
                    />
                </ListItem>

                <ListItem>
                    <ListItemText 
                        primary="City"
                        secondary={city}                    
                    />
                </ListItem>

                <ListItem>
                    <ListItemText 
                        primary="Bio"
                        secondary={bio}                    
                    />
                </ListItem>
            </List>

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
                Confirm & Continue
            </Button>
        </Box>
    )
  }
}

export default Confirm;
