import logo from './logo.svg';
import './App.css';
import FetchData from './FetchData';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        Carson Wentz 2021 Snap Counter
      </header>
      <div className="Body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <FetchData />
      </div>
    </div>
  );
}

export default App;
