import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import NumberTicker from "@/components/ui/number-ticker";

export function ResultsInfo() {
    const resultData = [
        {
            title: "Happy Clients",
            value: 2452
        },
        {
            title: "Kind Of Dairy",
            value: 162
        },
        {
            title: "Team Members",
            value: 72
        }
    ]
    return (
        <>
            <div className="relative w-[100%] h-[400px] max-h-[450px] bmd:h-fit overflow-hidden py-[2rem]">
                <WavyBackground backgroundFill="#ecd655" colors={["#b1f8f2", "#f4844f", "012a36"]} className="w-full h-full flex justify-center items-center">
                    <h2 className="text-black font-bold font-heading text-[30px] text-center">
                        Our Achievements
                    </h2>
                    <div className="w-full grid grid-cols-3 bmd:grid-cols-1 gap-[20px] ">
                        {resultData.map((data, index) => (
                            <div key={index} className="results__wrapper flex flex-col gap-[10px] items-center">
                                <p className="whitespace-pre-wrap font-heading text-[80px] bmd:text-[30px] font-medium tracking-tighter text-black dark:text-white">
                                    <NumberTicker value={data.value} /> + 
                                </p>
                                <span className="text-black font-primary font-[700]">{data.title}</span>
                            </div>
                        ))}
                    </div>
                </WavyBackground>
            </div>
        </>
    );

}