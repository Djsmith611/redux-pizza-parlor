import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Header/Header.jsx';
import CustomerInfo from "../CustomerInfo/CustomerInfo.jsx";
import Checkout from '../Checkout/Checkout.jsx';
import './App.css';
import Select_Pizza from '../Select_Pizza/Select_Pizza.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Admin from "../Admin/Admin.jsx";


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
      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
      <Select_Pizza/>
      <Router>
        <Routes>
          {/* PRESS CMD + "/" TO UNCOMMENT A SECTION, PLEASE CHANGE PATH AND ELEMENT AS NEEDED */}
          
          {/* <Route exact path='/' element={<Landing />} /> */}
          {/* <Route exact path='/select' element={<SelectPizza />} /> */}
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/info' element={<CustomerInfo />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
