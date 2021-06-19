import { TextField } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>About Form</h1>
      <form>
        <TextField id="filled-basic" label="Name" variant="filled" required />
        <TextField id="filled-basic" label="Goals" variant="filled" required />
        <TextField id="filled-basic" label="Habits" variant="filled" required />
        <TextField id="filled-basic" label="Age" variant="filled" required />
        <TextField id="filled-basic" label="Interests" variant="filled" required />
        <TextField id="filled-basic" label="Experience" variant="filled" required />
        <TextField id="filled-basic" label="Volunteering" variant="filled" required />
      </form>
    </div>
  );
}

export default App;
