import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
  images?: string[];
}

const ImageCarousel = (props: Props) => {
  const { images } = props;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-lg"
    >
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
            <div className="flex justify-center">
              <Card>
                <CardContent className="flex h-[17rem] aspect-square items-center justify-center p-1 border-none">
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
                    }}
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
