import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    backgroundColor: "#333",
    position: "fixed",
    top: 0,
    width: "100%",
    "& a": {
      float: "left",
      display: "block",
      color: "#f2f2f2",
      textAlign: "center",
      padding: "14px 16px",
      textDecoration: "none",
      fontSize: "17px",
    },
  },
  forms: {
    textAlign: "center",
    marginTop: "85px",
  },
}));

export default function Register() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    console.log("kufdksjduyfksjh", event.target.value);
    setName(event.target.value);
  };

  return (
    <div>
      <div className={classes.root}>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
      <form className={classes.forms} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-name"
            label="Name"
            value={name}
            onChange={handleChange}
          />
          <TextField
            id="standard-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
          />
        </div>
        <div>
          <TextField
            id="filled-name"
            label="Name"
            value={name}
            onChange={handleChange}
            variant="filled"
          />
          <TextField
            id="filled-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="Name"
            value={name}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            variant="outlined"
          />
        </div>
      </form>
    </div>
  );
}
