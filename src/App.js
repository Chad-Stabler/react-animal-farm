import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header greeting='Chad Stabler'/>
      <Main animals={animals}/>
      <Footer email='stablerpsn@gmail.com'/>
    </div>
  );
}

export default App;
