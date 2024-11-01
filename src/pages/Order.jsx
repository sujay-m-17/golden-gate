import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import OrderOnline from "@/components/order-online";


export default function Order() {
    return (
        <div>
            <div className="h-full relative w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased">
                <div className="relative w-[60%] bmd:w-[100%] top-[50px] h-full z-[2] max-w-full mx-auto p-4">
                    <h1 className="relative z-[2] text-[30px] font-heading bg-clip-text text-black bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
                        Online Order Form
                    </h1>
                    <div>
                        <OrderOnline />
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </div>
    )
}