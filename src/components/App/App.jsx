import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "../Header/Header.jsx";
import PizzaImage from "../Header/PizzaImage.jsx";
import CustomerInfo from "../CustomerInfo/CustomerInfo.jsx";
import Checkout from "../Checkout/Checkout.jsx";
import "./App.css";
import Select_Pizza from "../Select_Pizza/Select_Pizza.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Admin from "../Admin/Admin.jsx";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#639C68",
      },
      secondary: {
        main: "#9C6397",
      },
    },
    spacing: 12,
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <PizzaImage />
          <Routes>
            <Route exact path="/" element={<Select_Pizza />} />
            {/* <Route exact path='/' element={<Landing />} /> */}
            {/* <Route exact path='/select' element={<SelectPizza />} /> */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/info" element={<CustomerInfo />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
