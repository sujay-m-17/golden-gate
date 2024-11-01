import React from 'react';
import { Carousel } from 'antd';
import { Button } from "@material-tailwind/react";
import { TextGenerateEffect } from "./ui/text-generate-effect";


import cowsImage1 from '../assets/multiple-cows.jpg'
import cowsImage2 from '../assets/multiple-cows-2.jpg'
import cowsImage3 from '../assets/multiple-cows-3.jpg'


const contentStyle = {
  margin: 0,
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh'
};

export function CarouselComponent() {
  const words1 = `Crafting Quality Dairy with Insight and Precision Since 2022.`;
  const words2 = `Meet the Golden Gate Dairy's Vision, Delivered with Care.`;
  const words3 = `Driven by Planning, Guided by Demand: The Golden Standard in Dairy`;
  return (
    <>
      <Carousel arrows infinite={false}>
        <div>
          <div className='banner__wrapper' style={contentStyle}>
            <div className="overlay absolute inset-0 w-full h-full bg-[#000] opacity-[0.5] z-[2]"></div>
            <img className='absolute inset-0 w-full h-full object-cover' src={cowsImage1} alt="" />
            <div className="content__wrapper absoulute z-[2] max-w-[500px] flex flex-col gap-[20px] items-center" data-aos="fade-up">
              <h1 className='font-heading text-[#fff] text-[40px] bmd:text-[30px] text-center'>
              <TextGenerateEffect words={words1} />
              </h1>
              <Button className="font-button text-[16px] w-fit capitalize text-black font-normal bg-[#ecb01c] rounded-[50px]" size="sm">
                Explore Brands
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className='banner__wrapper' style={contentStyle}>
            <div className="overlay absolute inset-0 w-full h-full bg-[#000] opacity-[0.5] z-[2]"></div>
            <img className='absolute inset-0 w-full h-full object-cover' src={cowsImage2} alt="" />
            <div className="content__wrapper absoulute z-[2] max-w-[500px] flex flex-col gap-[20px] items-center" data-aos="fade-up">
              <h1 className='font-heading text-[#fff] text-[40px] bmd:text-[30px] text-center'>
              <TextGenerateEffect words={words2} />
              </h1>
              <Button className="font-button text-[16px] w-fit capitalize text-black font-normal bg-[#ecb01c] rounded-[50px]" size="sm">
                Explore Brands
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className='banner__wrapper' style={contentStyle}>
            <div className="overlay absolute inset-0 w-full h-full bg-[#000] opacity-[0.5] z-[2]"></div>
            <img className='absolute inset-0 w-full h-full object-cover' src={cowsImage3} alt="" />
            <div className="content__wrapper absoulute z-[2] max-w-[500px] flex flex-col gap-[20px] items-center" data-aos="fade-up">
              <h1 className='font-heading text-[#fff] text-[40px] bmd:text-[30px] text-center'>
              <TextGenerateEffect words={words3} />
              </h1>
              <Button className="font-button text-[16px] w-fit capitalize text-black font-normal bg-[#ecb01c] rounded-[50px]" size="sm">
                Explore Brands
              </Button>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
