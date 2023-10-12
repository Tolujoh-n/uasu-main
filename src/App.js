import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Investors from "./Components/Investors";
import About from "./Components/About";
import Header from "./Components/Header";
import Waitlist from "./Components/Waitlist";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/css/style.css";


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
      <Router>

        <Routes>
          <Route
            path="/"
            element={
              
              <>
                <Navbar />
                <Header />
                <main id="main">
                <About />
                <Investors />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>

        
      </Router>
  );
}

export default App;
