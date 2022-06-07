import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header name='Chad Stabler'/>
      <Main animals={animals}/>
      <Footer year='2022'/>
    </div>
  );
}

export default App;
