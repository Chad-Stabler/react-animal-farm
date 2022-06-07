import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Main animals={animals}/>
    </div>
  );
}

export default App;
