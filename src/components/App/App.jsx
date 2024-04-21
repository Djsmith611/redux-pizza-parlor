import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {


const theme = createTheme({
  palette: {
    primary: {
      main: '#639C68',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

  return (
    <div className='App'>
      <header className='App-header'>
        <Header theme={theme} ThemeProvider={ThemeProvider}/>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
