import {
  Admin,
  Checkout,
  CustomerInfo,
  Header,
  LandingPage,
  Select_Pizza,
} from "../../index.jsx";
import "./App.css";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function App() {
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
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/select" element={<Select_Pizza />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/info" element={<CustomerInfo />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};
