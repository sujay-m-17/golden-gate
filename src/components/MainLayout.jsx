import React, { useEffect } from 'react';
import { NavigationbarWithDropdownMultilevelMenu } from '../components/navbar.jsx';
import { CarouselComponent } from '../components/carousel-component.jsx';
import { ImageWithText } from '../components/image-with-text.jsx';
import { MarqueeSection } from '../components/marquee-section.jsx';
import { SingleMarquee } from '../components/single-marquee.jsx';
import { RetroGridSection } from '../components/animated-grid.jsx';
import { ContactForm } from '../components/contact-form.jsx';
import { FooterWithSocialLinks } from '../components/footer.jsx';
import { DetailsSummary } from '../components/details-summary.jsx';
import { ScrollText } from '../components/scroll-text.jsx';
import { CustomCardStack } from '../components/card-stack.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

import bannerImage from '../assets/home-banner-image.jpg';
import aboutImage from '../assets/about-image.png'
import { Contact } from 'lucide-react';
import Lenis from 'lenis';
import { AceCarousel } from '../components/ace-carousel';
import { GridCardsSection } from '../components/grid-cards';
import { ResultsInfo } from '../components/results-info';

import { Outlet } from 'react-router-dom';

function MainLayout() {
  useEffect(() => {
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

  const words1 = [
    {
      text: "Welcome",
    },
    {
      text: "To",
    },
    {
      text: "Golden",
      className: "text-[#ecb01c]",
    },
    {
      text: "Golden",
      className: "text-[#ecb01c]",
    },
    {
      text: "Dairy",
      className: "text-[#ecb01c]",
    },
    {
      text: "Factory.",
      className: "text-[#ecb01c]",
    }
  ]

  const words2 = [
    {
      text: "About",
    },
    {
      text: "The",
    },
    {
      text: "Factory",
      className: "text-[#ecb01c]",
    }
  ]

  return (
    <>
      <div className='navbar mx-[2rem] sticky inset-0 top-[2rem] z-[3]'>
        <NavigationbarWithDropdownMultilevelMenu />
      </div>

      <Outlet />

      <div className="footer">
        <FooterWithSocialLinks />
      </div>
    </>
  )
}

export default MainLayout
