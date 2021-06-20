import './App.css';
import { useState } from 'react';
import PopDialog from './Components/Dailog';
import {Button} from '@material-ui/core';

const App =() =>{

  // //state variable for dialog to open
  const[open,setOpen] = useState(false);

  // //dailog open function
  const handleOpen = () =>{
    setOpen(true);
  };

  // //dailog close function
  const handleClose = () =>{
    setOpen(false);
  };


  return (
    <div className="App">
      <Button className="startbtn" variant="contained" color="default" size="large" onClick={handleOpen}>
        Register Yourself!
      </Button>
      <PopDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;
