import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Typography } from "@material-ui/core";
import Naruto from "../images/naruto.png";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    height: "70vh",
    width: "280px",
    margin: "5px auto",
    borderRadius: "15px",
  },
  avatar: {
    backgroundColor: "#4ed64e",
  },
  h2: {
    fontSize: "30px",
    marginTop: "10px",
  },
  textField: {
    "& .MuiTextField-root": {
      marginTop: "20px",
    },
  },
  button: {
    margin: "10px 0",
  },
  naruto: {
    paddingLeft: "20px",
    width: "200px",
    height: "200px",
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Paper elevation={10} className={classes.paper}>
          <Grid align="center">
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h2 className={classes.h2}>LOGIN</h2>
          </Grid>
          <Grid className={classes.textField}>
            <TextField
              label="Username"
              placeholder="Enter Username"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter Password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Me"
          />
          <Grid align="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<LockOutlinedIcon />}
            >
              Login
            </Button>
          </Grid>
          <Typography>
            <Link>Forgot Password ?</Link>
          </Typography>
          <Typography>
            Do you have an account ?<Link>Register</Link>
          </Typography>
          <img className={classes.naruto} src={Naruto} alt="" />
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
