import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form";

const ModalDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
