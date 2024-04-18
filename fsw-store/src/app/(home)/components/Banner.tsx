"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import Autoplay from "embla-carousel-autoplay";

interface IBanner {
  src: string[];
}

const Banner = ({ src }: IBanner) => {
  const fiveSeconds = 5000;

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: fiveSeconds,
        }),
      ]}
    >
      <CarouselContent>
        {src.map((item, index) => (
          <CarouselItem
            key={index}
            className="max-h-[550px] pl-2 lg:max-h-[500px]"
          >
            <Image
              src={item}
              alt={item.slice(1, -4).replace("-", " ")}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full"
              style={{ objectFit: "cover" }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
