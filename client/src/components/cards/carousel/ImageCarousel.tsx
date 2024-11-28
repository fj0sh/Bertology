import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
  images?: string[];
}

const ImageCarousel = (props: Props) => {
  const { images } = props;
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center", // Center alignment to ensure the middle item is in focus
      }}
      className=" w-fit max-w-screen-lg p-10 h-full"
    >
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem
            key={index}
            className={`md:basis-1/2 lg:basis-1/3 transition-all duration-500 ease-in-out ${
              currentIndex === index - 1 ? "scale-110" : "scale-[.85]" // Scaling effect
            }`}
          >
            <div className="flex justify-center">
              <Card>
                <CardContent
                  className="flex h-[17rem] aspect-square items-center justify-center p-1 border-none 
      transition-all duration-300 hover:h-[19rem] hover:shadow-lg"
                >
                  <Image
                    src={image || "/images/empty-image.png"}
                    alt="roadblock"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="hover:scale-105"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-orangePrimary border-none text-3xl" />
      <CarouselNext className="text-orangePrimary border-none" />
    </Carousel>
  );
};

export default ImageCarousel;
