// App.js
import React from 'react';
import './App.css';
import Campus from './CampusRec.png';


function App() {
  return (
    <div className="App">
     <div className='Nav'>
      <nav>
        <ul>
          <li>Nav-1</li>
          <li>Nav-2</li>
          <li>Nav-3</li>
          <li>Nav-4</li>
          <li>Nav-5</li>
        </ul>
      </nav>

      </div>
      <div className='Hero'>
      <img src={Campus} alt="Campus Recruitment" ></img>
      <h1>We are here to guide in Placement</h1>
      </div>
    </div>
    
  );
}

export default App;
