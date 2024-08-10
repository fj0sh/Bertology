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
            <div className="p-1">
              <Card>
                <CardContent className="flex h-[20rem] aspect-square items-center justify-center p-3">
                  <Image
                    src={image}
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
