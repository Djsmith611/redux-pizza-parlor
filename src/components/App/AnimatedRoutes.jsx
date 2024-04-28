import {
  Admin,
  Checkout,
  CustomerInfo,
  Header,
  LandingPage,
  Select_Pizza,
} from "../../index.jsx";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

export default function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/select" element={<Select_Pizza />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/info" element={<CustomerInfo />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AnimatePresence>
  );
};
