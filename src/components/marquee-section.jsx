import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

import brand1 from "../assets/brand-logo-1.png";
import brand2 from "../assets/brand-logo-2.png";
import brand3 from "../assets/brand-logo-3.png";
import brand4 from "../assets/brand-logo-4.png";
import brand5 from "../assets/brand-logo-5.png";
import brand6 from "../assets/brand-logo-6.png";
import brand7 from "../assets/brand-logo-7.png";
import brand8 from "../assets/brand-logo-8.png";
import brand9 from "../assets/brand-logo-9.png";
import brand10 from "../assets/brand-logo-10.png";
import brand11 from "../assets/brand-logo-11.png";
import brand12 from "../assets/brand-logo-12.png";
import brand13 from "../assets/brand-logo-13.png";
import brand14 from "../assets/brand-logo-14.png";
import brand15 from "../assets/brand-logo-15.png";
import brand16 from "../assets/brand-logo-16.png";
import brand17 from "../assets/brand-logo-17.png";
import brand18 from "../assets/brand-logo-18.png";
import brand19 from "../assets/brand-logo-19.png";
import brand20 from "../assets/brand-logo-20.png";

const reviews = [
  {
    img: brand1,
  },
  {
    img: brand2,
  },
  {
    img: brand3,
  },
  {
    img: brand4,
  },
  {
    img: brand5,
  },
  {
    img: brand6,
  },
  {
    img: brand7,
  },
  {
    img: brand8,
  },
  {
    img: brand9,
  },
  {
    img: brand10,
  },
  {
    img: brand11,
  },
  {
    img: brand12,
  },

  {
    img: brand13,
  },
  {
    img: brand14,
  },
  {
    img: brand15,
  },
  {
    img: brand16,
  },
  {
    img: brand17,
  },
  {
    img: brand18,
  },
  {
    img: brand19,
  },
  {
    img: brand20,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }) => {
  return (
    <>
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex items-center justify-center">
          <img src={img} alt="Brand Images" />
        </div>
      </figure>
    </>
  );
};

export function MarqueeSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
