import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
      <Router>
        <Routes>
          {/* PRESS CMD + "/" TO UNCOMMENT A SECTION, PLEASE CHANGE PATH AND ELEMENT AS NEEDED */}
          
          {/* <Route exact path='/' element={<Landing />} /> */}
          {/* <Route exact path='/select' element={<SelectPizza />} /> */}
          {/* <Route path='/info' element={<CustomerInfo />} /> */}
          {/* <Route path='/checkout' element={<Checkout />} /> */}
          {/* <Route path='/admin' element={<AdminView />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
