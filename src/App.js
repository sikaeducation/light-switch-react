import './App.css';
import {useState} from 'react';

function App() {
  const [ status, setStatus ] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setStatus(!status)}>
        This light is {status ? "on" : "off"}!
      </button>
    </div>
  );
}

export default App;
