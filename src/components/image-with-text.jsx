import React from 'react';
import { Button } from '@material-tailwind/react';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function ImageWithText({
    words,
    imageSrc,
    title = "Welcome To Golden Golden Dairy Factory",
    description = "Golden Gate Dairy Manufacturing Company was established in 2022. Based in United Arab Emirates...",
    buttonText = "Learn More",
    containerClass = "flex px-[2rem] py-[4rem] flex-row gap-[20px] justify-between bmd:flex-col-reverse",
    imageWrapperClass = "relative flex-[50%] bmd:flex-none rounded-[20px] w-full h-[400px] bmd:h-[200px] max-h-[400px] overflow-hidden",
    textWrapperClass = "flex flex-col gap-[20px] justify-center items-center flex-[50%]",
    titleClass = "font-heading text-[30px]",
    descriptionClass = "desc font-primary font-normal text-center",
    buttonClass = "font-button text-[16px] w-fit capitalize text-black font-normal bg-[#ecb01c] rounded-[50px]"
}) {
    return (
        <div className={`image__text__container ${containerClass}`}>
            <div className={`image__wrapper ${imageWrapperClass}`} data-aos="fade-up">
                <img src={imageSrc} alt="Banner Image" className="absolute inset-0 w-full object-cover" />
            </div>
            <div className={`text__wrapper ${textWrapperClass}`} data-aos="fade-up">
                <h2 className={titleClass}>{title}</h2>
                <TypewriterEffectSmooth className='font-heading text-[30px] blg:hidden lg:flex'  words={words} />
                <p className={descriptionClass}>{description}</p>
                <Button className={buttonClass} size="sm">
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}
