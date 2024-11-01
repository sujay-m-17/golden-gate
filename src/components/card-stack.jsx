import gsap from "gsap";
import { React, useEffect } from "react";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

import process1Image from "../assets/process-1.png";
import process2Image from "../assets/process-2.png";
import process3Image from "../assets/process-3.png";
import process4Image from "../assets/process-4.png";
import process5Image from "../assets/process-5.png";
import process6Image from "../assets/process-6.png";
import process7Image from "../assets/process-7.png";

export function CustomCardStack() {
    
    // gsap.registerPlugin(ScrollTrigger);

    const data = [
        { image: process1Image },
        { image: process2Image },
        { image: process3Image },
        { image: process4Image },
        { image: process5Image },
        { image: process6Image },
        { image: process7Image },
    ];

    // useEffect(() => {

    //     let ctx = gsap.context(() => {
            
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".card__wrapper",
    //                 start: "top top",
    //                 end: "bottom top",
    //                 scrub: 1,
    //                 pin: true,
    //                 ease: 'linear',
    //                 markers: true
    //             }
    //         });

    //         tl.to(".cards", {
    //             height: 100,
    //             paddingBottom: 0,
    //             stagger: .5
    //         })
    //     });
    //     return () => ctx.revert();
    // }, []);

    return (
        <>  
            <div>
                <h2 className="text-[40px] bmd:text-[20px] font-heading py-[50px] text-center text-black capitalize">Milk Processing Stages</h2>
            </div>
            <div className="card-stack">
                <div className="h-[40rem] flex items-center justify-center w-full">
                    <CardStack items={data} />
                </div>
            </div>
        </>
    );
}
