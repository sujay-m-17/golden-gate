import './App.css'
import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Lenis from 'lenis';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import HomePage from './pages/Home';
import Brands from './pages/Brands';
import About from './pages/About';
import Order from './pages/Order';
import ContactUs from './pages/ContactUs';

import Preloader from './components/preloader';

function App() {

  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    // Preloader
    setScreenLoading(true);

    setTimeout(() => {
      setScreenLoading(false);
    }, 5000);

    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });

    const lenis = new Lenis({
      duration: 1.2,          // Scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),       // Linear easing
      smooth: true,           // Enable smooth scrolling
      direction: 'vertical',  // Scroll direction
      gestureDirection: 'vertical',
      smoothTouch: false,
    });
    function raf(time) {
      lenis.raf(time);             // Update Lenis
      requestAnimationFrame(raf);  // Keep loop going
    }

    requestAnimationFrame(raf); // Start animation loop

    // Clean up Lenis on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {
        screenLoading ? <Preloader /> : <Router>
          <Routes>
            <Route path="/" element={<MainLayout />} >
              <Route index element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="brands" element={<Brands />} />
              <Route path="/order" element={<Order />} />
              <Route path="/contact" element={<ContactUs />} />
            </Route>
          </Routes>
        </Router>
      }
    </>
  )
}

export default App
