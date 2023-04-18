//import logo from './logo.svg';
import './App.css';
import Tommy from "/home/moringa/Development/code/phase-2/myReactApp/my-react-app/src/Tommy/tommy.jpg";
import React from 'react'; 

function Greetings(){
  alert('you clicked this button!');
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Tommy} className="App-logo" alt="" />
        <p>
          welcome to the shelby family 
        </p>
        <button onClick={Greetings}>
            WELCOME
        </button>
        
      </header>
    </div>
  );
}


export default App;
