import logo from './Holberton_Logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email'></input>
          <label htmlFor='Password'>Password</label>
          <input type='Password' name='Password'></input>
          <button>Ok</button>
        </form>
      </div>

      <div className='App-footer'>
        <p><i>Copyright {getFullYear()} - {getFooterCopy()}</i></p>
      </div>
    </div>
  );
}

export default App;
