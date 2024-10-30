import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

import client1 from "../assets/client-logo-1.png";
import client2 from "../assets/client-logo-2.png";
import client3 from "../assets/client-logo-3.png";
import client4 from "../assets/client-logo-4.png";

const reviews = [
  {
    img: client1,
  },
  {
    img: client2,
  },
  {
    img: client3,
  },
  {
    img: client4,
  }
];

const firstRow = reviews;

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

export function SingleMarquee() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    </div>
  );
}
