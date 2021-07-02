
import './App.css';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, TextField, Toolbar, Container } from '@material-ui/core'
import { Dashboard, TextFields } from '@material-ui/icons';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles' ;


function App() {
  return (
    <>
    <CssBaseline />
    
    <AppBar position= "relative" gutterBottom>
      <Toolbar>
<Dashboard />
<Typography variant= "h6">
  Registration Form
</Typography>
</Toolbar>
    </AppBar>

    <Container style= {{marginTop: '100px'}} >
      <Card>
        <CardContent>
          <Typography variant= "h6" gutterBottom>
            Name
          </Typography>
          <TextField required label="Full Name"  />

          <Typography variant= "h6" gutterBottom style= {{marginTop: '20px'}}>
            E-mail
          </Typography>
          <TextField required label="Email Id"  />

          <Typography variant= "h6" gutterBottom style= {{marginTop: '20px'}}>
            Phone Number
          </Typography>
          <TextField required label="Phone Number"  />
          <Button variant="contained" color= "primary"  style={{marginTop: '120px'}} >
    Submit
  </Button>

        </CardContent>
      </Card>
    </Container>



    </>
  );
}

export default App;
