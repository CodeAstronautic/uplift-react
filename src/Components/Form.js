import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root':{
            margin: theme.spacing(1),
            width: '300px',
        },

        '& .MuiButtonBase-root':{
            margin: theme.spacing(2),
        },
        
    },
    dob: {
        '& .MuiInputBase-input':{
            color: 'grey',
        }
    }

}));


const Form = ({handleClose}) =>{
    const classes = useStyles();
    // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [mobile, setmobile] = useState('');
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

    return(
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField 
                label="First Name" 
                variant="filled" 
                required 
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />

            <TextField 
                label="Last Name" 
                variant="filled" 
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)} 
            />

            <TextField 
                label="Email" 
                variant="filled" 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)} 
            />

            <TextField 
                label="Phone Number" 
                variant="filled" 
                required
                type="tel"
                error={isError}
                value={mobile}
                onChange={(e) => {
                    setmobile(e.target.value);
                    if (e.target.value.length > 10) {
                      setIsError(true);
                    }
                  }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">
                       +91
                       </InputAdornment>,
                  }}
                
            />

            <TextField 
                className={classes.dob}
                label="DOB" 
                variant="filled"
                type="date"
                // format="MM/dd/yyyy" 
                required
                InputLabelProps={{
                    shrink: true,
                  }}
                value={date}
                onChange={e => setDate(e.target.value)} 
            />

            <TextField 
                label="Password" 
                variant="filled" 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)} 
            />

            <div>
                <Button variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    SignUp
                </Button>
            </div>
        </form>
    );
};

export default Form;