import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid #000",
    borderRadius: "5px",
    width: "30%",
    height: "50vh",
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <div>
      <section className="signup">
        <div className={classes.container}>
          <div className="signup_content">
            <div className="signup_form">
              <h1 className="form_title">Sign Up</h1>
              <form>
                <div className="form_group">
                  <TextField label="Name" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
