import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
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
  radio: {
    marginTop: "5px",
  },
  textField: {
    "& .MuiTextField-root": {
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  button: {
    margin: "10px 0",
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Paper elevation={10} className={classes.paper}>
          <Grid align="center">
            <Avatar className={classes.avatar}>
              <LockOpenOutlinedIcon />
            </Avatar>
            <h2 className={classes.h2}>REGISTER</h2>
          </Grid>
          <Grid className={classes.textField}>
            <TextField
              label="Name"
              placeholder="Enter your name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              required
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                className={classes.radio}
                aria-label="gender"
                name="gender1"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Phone"
              placeholder="Enter your phone"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your Password"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
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
              startIcon={<LockOpenOutlinedIcon />}
            >
              Register
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Register;
