import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: "hidden",
        backgroundColor: "#333",
        position: "fixed",
        top: "0",
        width: "100%",

        "& a": {
            float: "left",
            display: "block",
            color: " #f2f2f2",
            textAlign: "center",
            padding: "14px 16px",
            textDecoration: "none",
            fontSize: "17px",
            backgrounColour: "black",
        },

    },

    forms: {
        display: 'flex',
        flexWrap: 'wrap',

    },

    textField: {
        marginLeft: "theme.spacing(1)",
        marginRight: "theme.spacing(1)",
        margin: "30px",
        width: "25ch",
    },

    button:
    {
        margin: 30,
    }




}));

export default function Form() {
    const classes = useStyles();
    return (

        <>

            <div className={classes.root}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#product">Product</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>


            <form className={classes.form}>
                <div>
                    <TextField
                        id="standard-full-width"
                        label="Full Name"
                        style={{
                            margin: 30,
                            marginTop: 90,
                        }}
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="Email"
                        id="margin-none"
                        //  style={{ margin: 70}}
                        defaultValue="Default Value"
                        className={classes.textField}
                    // helperText="Some important text"
                    />
                    <TextField
                        label="Mobile Number"
                        id="margin-dense"
                        defaultValue="Default Value"
                        //  style={{ margin: 70}}
                        className={classes.textField}
                        // helperText="Some important text"
                        margin="dense"
                    />
                    <TextField
                        label="Address"
                        id="margin-normal"
                        defaultValue="Default Value"
                        // style={{ margin: 70}}
                        className={classes.textField}
                        //helperText="Some important text"
                        margin="normal"
                    />

                </div>
                <div>

                    <TextField
                        label="Course"
                        id="margin-normal"
                        defaultValue="Default Value"
                        // style={{ margin: 70}}
                        className={classes.textField}
                        //helperText="Some important text"
                        margin="normal"
                    />
                    <TextField
                        label="College"
                        id="margin-normal"
                        defaultValue="Default Value"
                        // style={{ margin: 70}}
                        className={classes.textField}
                        //helperText="Some important text"
                        margin="normal"
                    />

                    <TextField
                        label="Graduation Year"
                        id="margin-normal"
                        defaultValue="Default Value"
                        // style={{ margin: 70}}
                        className={classes.textField}
                        //helperText="Some important text"
                        margin="normal"
                    />


                </div>

            </form>

            <div className={classes.button}>

                <Button variant="contained" color="secondary">
                    Submit
                </Button>

            </div>

        </>



    );

};