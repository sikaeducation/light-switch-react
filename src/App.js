import './App.css';

function App() {
  const status = false;

  return (
    <div className="App">
      <button onClick={() => !status}>
        This light is {status ? "on" : "off"}!
      </button>
    </div>
  );
}

export default App;
