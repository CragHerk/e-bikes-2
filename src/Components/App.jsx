import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import BikesGrid from "./BikesGrid";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Reservation from "./Reservation";

const App = () => {
  return (
    <Router basename="/e-bikes-2">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <Header />

      <BikesGrid />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
