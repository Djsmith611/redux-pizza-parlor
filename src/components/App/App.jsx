import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "../Header/Header.jsx";
import CustomerInfo from "../CustomerInfo/CustomerInfo.jsx";
import Checkout from "../Checkout/Checkout.jsx";
import "./App.css";
import Select_Pizza from "../Select_Pizza/Select_Pizza.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Admin from "../Admin/Admin.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#639C68",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path="/select" element={<Select_Pizza />} />
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
