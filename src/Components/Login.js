
import {makeStyles, Container, TextField,Button} from '@material-ui/core';
import {useState} from 'react'
import React from 'react'
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
      marginTop:'15px'
    },
    tabs:{
      alignItems:'center'
    },
    title:{
      marginLeft:'78px'
    }
  }));
  
function Login() {
    const classes=useStyles();
    const [email, setEmail] = useState(0);
    const [password,setPassword] =useState(0);
    
    const test=()=>{
      console.log(email);
        console.log(password);
    }


    return (
      <form>     
    <Container className={classes.container} maxWidth='xs'>
    <h1 className={classes.title}>Login In</h1>
      
      <TextField  onChange={event=> setEmail(event.target.value)} className={classes.items} label='Username' variant='outlined'/>
      <TextField onChange={event=>setPassword(event.target.value)} className={classes.items} label='Password' type='password' variant='outlined'/>
      <Button onClick={test} className={classes.items} type='submit' variant='contained' color='primary'>Login</Button>
      
    </Container>
    </form>
    )
}

export default Login
