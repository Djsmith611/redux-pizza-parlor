import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
