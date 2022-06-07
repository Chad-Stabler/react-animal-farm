import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header name='Chad Stabler'/>
      <Main animals={animals}/>
    </div>
  );
}

export default App;
