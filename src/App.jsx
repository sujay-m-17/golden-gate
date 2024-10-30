import './App.css'
import React, { useEffect } from 'react';
import { NavigationbarWithDropdownMultilevelMenu } from './components/navbar.jsx';
import { CarouselComponent } from './components/carousel-component.jsx';
import { ImageWithText } from './components/image-with-text.jsx';
import { MarqueeSection } from './components/marquee-section.jsx';
import { SingleMarquee } from './components/single-marquee.jsx';
import { RetroGridSection } from './components/animated-grid.jsx';
import { ContactForm } from './components/contact-form.jsx';
import { FooterWithSocialLinks } from './components/footer.jsx';


import AOS from 'aos';
import 'aos/dist/aos.css';

import bannerImage from './assets/home-banner-image.jpg';
import aboutImage from './assets/about-image.png'
import { Contact } from 'lucide-react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="main__section">
        <div className='navbar sticky inset-0 top-[2rem] z-[2]'>
          <NavigationbarWithDropdownMultilevelMenu/>
        </div>
        <div className='carousel absolute inset-0 max-h-100vh w-full h-full'>
          <CarouselComponent />
        </div>
      </div>
      <div>
        <ImageWithText
          imageSrc = {bannerImage}
          title = "Welcome To Golden Gate Dairy Factory"
          description = "Golden Gate Dairy Manufacturing Company was established in 2022. Based in United Arab Emirates. The most important reason for a company to be successful is, to be conformed to the previous Planning system, and to make a field study for the demand on the product and the services which could be offered by the issued company in the community, and to see how the possibility of accommodating the demand to determine the size and times of supply and demand when it will end."
          buttonText = "Learn More"
          containerClass = "flex px-[2rem] py-[4rem] flex-row gap-[20px] justify-between bmd:flex-col-reverse"
          imageWrapperClass = "relative flex-[50%] bmd:flex-none rounded-[20px] w-full pb-[30%] bmd:pb-[60%] overflow-hidden"
          textWrapperClass = "flex flex-col gap-[20px] justify-center items-center flex-[50%]"
          titleClass = "font-heading text-[30px]"
          descriptionClass = "desc font-primary font-normal text-center"
          buttonClass = "font-button text-[16px] w-fit capitalize text-black font-normal bg-[#ecb01c] rounded-[50px]"
        />
      </div>
      <div>
        <div className="text-center">
          <h2 className="text-[40px] font-heading font-bold">Our Featured Brands</h2>
        </div>
        <MarqueeSection />
      </div>
      <div>
        <ImageWithText
          imageSrc = {aboutImage}
          title = "About The Factory"
          description = "Built on a land area of (15.000) square meters and consists factory of’seven production lines, with the latest machines and technologies in the field of packaging, and the factory is provided with a system to generate nitrogen and to save coated materials and prolong the life of the product, and the factory enabled and automatic system with the latest global technology and there is a team full of all disciplines oversees the process of packing and packaging production and quality control."
          buttonText = "Learn More"
          containerClass = "flex px-[2rem] py-[4rem] flex-row-reverse gap-[20px] justify-between bmd:flex-col-reverse"
          imageWrapperClass = "relative flex-[50%] bmd:flex-none rounded-[20px] w-full pb-[30%] bmd:pb-[60%] overflow-hidden"
          textWrapperClass = "flex flex-col gap-[20px] justify-center items-center flex-[50%]"
          titleClass = "font-heading text-[30px]"
          descriptionClass = "desc font-primary font-normal text-center"
          buttonClass = "font-button text-[16px] w-fit capitalize text-black font-normal bg-[#ecb01c] rounded-[50px]"
        />
      </div>
      <div>
        <div className="text-center">
          <h2 className="text-[40px] font-heading font-bold">Our Featured Clients</h2>
        </div>
        <SingleMarquee />
      </div>
      <div>
        <RetroGridSection />
      </div>
      <div className="footer">
        <FooterWithSocialLinks />
      </div>
    </>
  )
}

export default App
