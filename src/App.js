import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Hii this is m new</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function Mybutton(){
  return(
    <button style={{color:"red"}}>Click Here</button>
  );
}

export default function App(){
  return(
    <div>
    <h2>This is the heading</h2>
    <Mybutton />
    </div>
  );

}