import logo from './eks.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>
            Congratulations 🎉
          </b>
        </p>
        <p>
        Version 2 of the application is successfully running on <b>Amazon EKS</b> 🚀🔥
        </p>
      </header>
    </div>
  );
}

export default App;
