import { React, useEffect, useRef, useState } from "react";
import Lottie from 'react-lottie';
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import process1Image from "../assets/process-1.png";
import process2Image from "../assets/process-2.png";
import process3Image from "../assets/process-3.png";
import process4Image from "../assets/process-4.png";
import process5Image from "../assets/process-5.png";
import process6Image from "../assets/process-6.png";
import process7Image from "../assets/process-7.png";

import cowAnimation from '../assets/cow-animation.json'

export function AceCarousel() {

    const images = [
        { image: process1Image },
        { image: process2Image },
        { image: process3Image },
        { image: process4Image },
        { image: process5Image },
        { image: process6Image },
        { image: process7Image },
    ];


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cowAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const [size, setSize] = useState(window.innerWidth > 750 ? 400 : 200);

    useEffect(() => {
        const handleResize = () => {
          setSize(window.innerWidth > 768 ? 400 : 200);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <div>
                <h2 className="text-[40px] bmd:text-[20px] font-heading py-[50px] text-center text-black capitalize">Milk Processing Stages</h2>
            </div>
            <div className="flex flex-row bmd:flex-col w-full justify-between py-[2rem] px-[5rem] bmd:py-[1rem]">
                <div className="lottie__wrapper">
                    <Lottie
                        options={defaultOptions}
                        height={size}
                        width={size}
                    />
                </div>
                <div className="slider__carousel flex justify-center flex-[60%] w-full">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full flex justify-center items-center max-w-[480px] max-h-[480px]"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center">
                                                <div className="relative rounded-[20px] overflow-hidden max-w-[480px] max-h-[480px] w-full h-full">
                                                    <div className="tag__number font-heading tracking-[2px] text-[20px] absolute top-[20px] left-[20px] rounded-[50px] w-[80px] h-[40px] bg-[#ecb01c] flex justify-center items-center z-[2]">#{index + 1}</div>
                                                    <img className="absolute inset-0 w-full h-full object-cover" src={image.image} alt="" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </>
    )
}
