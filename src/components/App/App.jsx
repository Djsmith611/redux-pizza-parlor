import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AnimatedRoutes, Header } from "../../index.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <AnimatedRoutes />
        </Router>
      </ThemeProvider>
    </div>
  );
}
