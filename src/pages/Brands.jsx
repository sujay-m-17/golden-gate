import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Link } from 'react-router-dom';

import gardoImage from '../assets/brand-logo-6.png'
import alSahemImage from '../assets/brand-logo-12.png'
import rawaGardoImage from '../assets/brand-logo-17.png';
import cheriliatImage from '../assets/brand-logo-8.png';
import slgImage from '../assets/brand-logo-14.png';
import amigoImage from '../assets/amigo.png';
import maraiAlImage from '../assets/marai-al.png';
import jannatAlImage from '../assets/jannat-al.png';
import superMilkImage from '../assets/super-milk.png';
import lactoFarmImage from '../assets/brand-logo-16.png';
import lantanaImage  from '../assets/brand-logo-15.png';
import jannatImage from '../assets/brand-logo-4.png';
import zainImage from '../assets/brand-logo-5.png';
import samaMilkImage from '../assets/sama-milk.png';
import silvaMilkImage from '../assets/silva-milk.png';
import farmMilkImage from '../assets/farm-milk.png';
import lancyMilkImage from '../assets/lancy-milk.png';


export default function Brands() {

    const brands = [
        {
            img: gardoImage,
            name: 'Gardo',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: alSahemImage,
            name: 'Al-Sahem',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: rawaGardoImage,
            name: 'Rawaa Gardo',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: cheriliatImage,
            name: 'Cheriliat',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: slgImage,
            name: 'SLG',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: amigoImage,
            name: 'Amigo',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: maraiAlImage,
            name: 'Marai Al',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: jannatAlImage,
            name: 'Jannat Al',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: superMilkImage,
            name: 'Super Milk',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: lactoFarmImage,
            name: 'Lacto Farm',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: lantanaImage,
            name: 'Lantana',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: farmMilkImage,
            name: 'Farm Milk',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],
            buttonTitle: 'Order Now'
        },
        {
            img: lancyMilkImage,
            name: 'Lancy Milk',
            variantTitle: 'Available Variants',
            variants: [
                { name: 'Full cream milk powder' },
                { name: 'Fat filled milk powder' },
                { name: 'Skimmed milk powder' }
            ],  
            buttonTitle: 'Order Now'
        },

    ]

    return (
        <div>
            <div className=" mx-auto pt-[4rem] p-[2rem] grid grid-cols-3 gap-[10px] bmd:grid-cols-1">
                {brands.map((brand, index) => (
                    <CardContainer key={index} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[25rem] bmd:w-[20rem] h-auto rounded-xl p-6 border" data-aos="fade-up">
                            <CardItem
                                translateZ="50"
                                className="text-[25px] font-heading font-bold text-neutral-600 dark:text-white"
                            >
                                {brand.name}
                            </CardItem>
                            <CardItem
                                as="div"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                <h4 className='font-heading py-[10px]'>{brand.variantTitle}</h4>
                                <div className='flex justify-between font-primary'>
                                {brands[0].variants.map((variant, index) => (
                                    <p key={index}>{variant.name}</p>
                                ))}
                                </div>
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <div className="image__container relative w-[16rem] h-[200px] max-h-[200px] min-h-[200px] overflow-hidden">
                                    <div className="image__wrapper w-full h-full flex items-center justify-center">
                                    <img
                                        src={brand.img}
                                        className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                    </div>
                                </div>
                            </CardItem>
                            <div className="flex justify-between items-center mt-[20px]">
                                <CardItem
                                    translateZ={20}
                                    as={ Link }
                                    to="/order"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-button font-bold"
                                >
                                    {brand.buttonTitle}
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}