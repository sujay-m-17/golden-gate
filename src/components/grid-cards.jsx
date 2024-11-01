import React from "react";
import { Meteors } from "./ui/meteors";
import { WobbleCard } from "./ui/wobble-card";

export function GridCardsSection() {
    const data = [
        {
            title: "Global Reach",
            description: "Golden Gate Diary Production supplies dairy ingredients such as whole milk powder, skimmed milk powder, fat filled milk powder, full cream milk powder, and butter. We market and distribute our own consumer products, even act as wholesale food suppliers for bakeries."
        },
        {
            title: "Private Branding",
            description: "Golden Gate Diary Production private label products for our customers own brands. These products are manufactured to our customers specific requirements."
        },
        {
            title: "Global Reach",
            description: "Golden Gate Diary Production supplies dairy ingredients such as whole milk powder, skimmed milk powder, fat filled milk powder, full cream milk powder, and butter. We market and distribute our own consumer products, even act as wholesale food suppliers for bakeries."
        },
        {
            title: "Customized Packaging",
            description: "Golden Gate Diary Production offers you flexible solutions by delivering a wide range of milk powders, in a variety of compositions, origins and packaging according to your requirements."
        },
        {
            title: "Commitment in Work",
            description: "After many years of successful activity, we have solid knowledge that helps us fully support our existing and new customers, build and maintain long term relationships."
        },
        {
            title: "Open & Transparent",
            description: "We will always be as open and transparent as possible with all our customers; about our dairy products, about the price, about the market."
        },
        {
            title: "Positive Attitude",
            description: "We try to build up a synergetic system with our customers and suppliers, which requires not only things but also people to become interrelated and interdependent."
        }
    ]
    return (
        (
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-[40px] py-[2rem] font-heading font-bold text-black text-center">Golden Gate Diary Production: Your dairy solutions, made flexible</h2>
                </div>
                <div className="cards__wrappers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                {data.map((card, index) => (
                    <div key={index} className="card__container w-full relative max-w-xs" data-aos="zoom-in-up">
                    <WobbleCard className="">
                        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-2 w-2 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                    />
                                </svg>
                            </div>

                            <h1 className="font-bold font-heading text-xl text-[#ecb01c] mb-4 relative z-[3]">
                                {card.title}
                            </h1>

                            <p className="font-button text-white mb-4 relative min-h-[168px] z-[3]">
                               {card.description}
                            </p>

                            {/* Meaty part - Meteor effect */}
                            <Meteors number={20} />
                        </div>
                    </WobbleCard>

                </div>
                ))}
                </div>
            </div>
        )
    );
}
