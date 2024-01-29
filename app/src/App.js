// App.js
import React from 'react';
import './App.css';
import Hero from './Hero.jpg';


function App() {
  return (
    <div className="App">
     <div className='Nav'>
      <nav>
        <ul>
        <li>logo
        </li>
          <li>Home</li>
          <li>Courses</li>
          <li>Internships</li>
          <li>Blogs</li>
          <li>Join us</li>
        </ul>
      </nav>

      </div>
      <div className='Hero'>
      <img src={Hero} alt="Campus Recruitment" ></img>
      
      </div>
      <div className='Hero-down'>
        <h1>
          We are here to guide you for the placements
        </h1>
        <p>We are here</p>
      </div>
    </div>
    
  );
}

export default App;
