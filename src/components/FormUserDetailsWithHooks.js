import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UseFormContext from '../hooks/UseFormContext';

export default function FormUserDetailsWithHooks() {
    const {
        step,
        setStep,
        fields,
        setFields
    } = UseFormContext();

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
                onChange={(firstName) => setFields(firstName: e.target.value)}
                defaultValue=''
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
                onChange={(value) => updateLastName(value)}
                defaultValue=''
            />
            <br/>
            <TextField
                id='outlined-basic'
                label='Email'
                size='small'
                sx={{ margin: 2 }}
                variant='standard'
                onChange={(value) => updateEmail(value)}
                defaultValue=''
            />
            <br/> 
            <Button 
                variant="contained"
                sx={{ margin: 2 }}
                onClick={() => setStep( (prevStep) => prevStep + 1 )}>
                Continue
            </Button>
        </Box>
    )
}