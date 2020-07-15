import React from 'react';
import './App.css';

import Profile from "../src/profile"
function App() {
  return (
    <body style={{height:"100vh",top:"0",background: "rgb(131,58,180)",
    background:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,56,0.7542367288712359) 26%, rgba(252,176,69,1) 100%)"}} >
    <div className="App">
      <Profile />
    {  /* 
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>                            
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"  
        >n 

          Learn React
        </a>
    </header>*/}
}

    </div>
    </body>
  );
}

export default App;
