import './App.css';

function App() {
  return (
    <div className="App">
      <h1>About Form</h1>
      <form>
        <div>
          <label>Name: </label>
          <input type="text" placeholder="xyz" required />
        </div>
        <div>
          <label>Goals: </label>
          <input type="text" placeholder="Short term goals..." required />
        </div>
        <div>
          <label>Habits: </label>
          <input type="text" placeholder="Reading, Writing..." required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" placeholder="1200" required />
        </div>
        <div>
          <label htmlFor="">Interests: </label>
          <input type="text" placeholder="Researching" required />
        </div>
        <div>
          <label htmlFor="">Experience: </label>
          <input type="text" placeholder="Experiences" required />
        </div>
        <div>
          <label htmlFor="">Volunteers: </label>
          <input type="text" placeholder="Volunteering" required />
        </div>
      </form>
      <hr />
    </div>
  );
}

export default App;
