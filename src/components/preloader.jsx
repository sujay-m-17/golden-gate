
import { React, useEffect, useRef, useState } from "react";
import preloader from '../assets/preloader-animation.json';
import Lottie from 'react-lottie';

export default function Preloader() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: preloader,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

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
            <div className="preloader fixed inset-0 w-full h-screen bg-[#f1f5f9] flex items-center justify-center z-[9]">
                    <Lottie
                        options={defaultOptions}
                        height={size}
                        width={size}
                    />
            </div>
        </>
    );
}