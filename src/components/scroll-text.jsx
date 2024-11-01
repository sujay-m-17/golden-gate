import TextReveal from "@/components/ui/text-reveal";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function ScrollText() { 
    return (
        <>
            <div className="relative z-[2] flex min-h-[500px] bmd:w-[100%] mx-auto max-h-500px items-center bmd:flex-col justify-center bg-gradient-to-l from-pink-500 to-yellow-500">
                <TextReveal className="text-[30px] bmd:text-[20px] font-heading" text="OUR VISION : With rapidly growing prospect, Golden Gate Dairy is geared towards providing an ever-widening range of excellent products coupled with superior customer oriented service. The company's commitment to quality and excellence has earned us respect and support from thousands of retailers both locally and internationally." />
                <TextReveal className="text-[30px] bmd:text-[20px] font-heading" text="OUR MISSION: We aim to be among the most loved brand by the consumers; most envied by the competitors and the most valued brand from the perspective of the share holders. We focus on customer needs and protecting their interests to build lifelong relationships and brand loyalty." />
            </div>
            {/* <BackgroundGradientAnimation></BackgroundGradientAnimation> */}
        </>
    )
}