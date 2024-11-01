import React from 'react'

import RetroGrid from "@/components/ui/retro-grid";
import { RetroGridSection } from '../components/animated-grid';
import { ContactForm } from "../components/contact-form";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Order() {
    const words = [
        {
            text: "Connect"
        },
        {
            text: "With"
        },
        {
            text: "Our"
        },
        {
            text: "Team",
            className: 'text-[#ebd049]'
        }
    ]
    return (
        <div className="relative py-[50px] flex h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background">
            <div>
                <TypewriterEffectSmooth className='font-heading text-[30px] bmd:text-[20px]'  words={words} />
                <ContactForm />
            </div>
            <RetroGrid />
        </div>
    )
}