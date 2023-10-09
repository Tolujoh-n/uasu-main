import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Investors from "./Components/Investors";
import About from "./Components/About";
import Header from "./Components/Header";
import Waitlist from "./Components/Waitlist";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./assets/css/font-awesome.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/select2.min.css";
import "./assets/css/style.css";
import "./assets/css/dashboard.css";
import "./assets/css/skins/orange.css";

import GLightbox from "glightbox";
import AOS from "aos";

function App() {
  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  return (
    <div className="wrapper">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              
              <>
                <Header />
                <About />
                <Investors />
              </>
            }
          />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
