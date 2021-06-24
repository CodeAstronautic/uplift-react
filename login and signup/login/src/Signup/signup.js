import React from 'react'
import { useState } from 'react';
import { makeStyles, Grid, RadioGroup, FormControlLabel,Radio,Button } from '@material-ui/core';
import {Container, TextField} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    container:{
      height:'60vh',
      display:'flex',
      flexDirection:'column',
      marginTop:'16px',
      justifyContent:'center',
      textAlign:'center'
    },
    items:{
      margin:'5px',
      width:'97%'
    },
    form:{
        width:'92%',
    },
    radio:{
        marginLeft:'10px'
    },
    btn:{
        width:'100%',
        margin:'10px'
    }
  }));

function Signup() {
    const classes = useStyles();   
    const [value, setValue] = React.useState('female');
    const [fName,setfName] = useState(0);
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <Container className={classes.container} >
            <h1>Sign Up</h1>
            <form className={classes.form}>
                <Grid container>
                    <Grid items xs={6}> 
                    <TextField value={event=>setfName(event.target.value)} className={classes.items} variant='outlined' label='First Name' />
                    </Grid>
                    <Grid items xs={6}> 
                    <TextField className={classes.items} variant='outlined' label='Last Name' />
                    </Grid>
                    <Grid items xs={12}> 
                    <TextField className={classes.items} variant='outlined' label='Email id' />
                    </Grid>
                    <Grid items xs={12}> 
                    <RadioGroup row className={classes.radio} value={value} onChange={handleChange}>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    </RadioGroup>
                    </Grid>
                    <Grid items xs={12}> 
                    <TextField className={classes.items} variant='outlined' label='Password'/>
                    </Grid>
                    <Grid items xs={12}> 
                    <TextField className={classes.items} variant='outlined' label='Comfirm Password'/>
                     </Grid>
                    <Button className={classes.btn}variant='contained' color='primary'>Submit</Button>
                </Grid>
            
            </form>
            </Container>
        )
}

export default Signup
