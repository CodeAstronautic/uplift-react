import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import Form from './Form.js';

const PopDialog = ({open, handleClose}) =>{
    return(
        //props I receive from App component
        <Dialog open={open} onClose={handleClose}>
            <Form handleClose={handleClose} /> 
        </Dialog>
    );
};

export default PopDialog;
