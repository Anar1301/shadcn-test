"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import { MdOutlinePlayArrow } from "react-icons/md";
import { MovieType } from "@/types";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-360">
        <CarouselContent>
          {movies.map((movie, index) => (
            <CarouselItem
              key={index}
              className="w-360 relative h-160  bg-no-repeat bg-cover bg-center text-white"
            >
              <img
                className="w-full h-full"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
              <div className="p-1 absolute top-[108px] left-[140px]">
                <div className="">
                  <p>Now Playing :</p>
                  <p className="text-[36px] font-bold">{movie.title}</p>
                  <p className="flex gap-2 items-center text-[18px] pt-[10px]">
                    <FaStar className="h-[28px] w-[28px]" color="#FDE047" />
                    6.9<span className="text-[16px] color-[#71717A]">/10</span>
                  </p>
                  <p className="w-[500px] text-[12px] font-normal pt-[26px]">
                    {" "}
                    Elphaba, a misunderstood young woman because of her green
                    skin, and Glinda, a popular girl, become friends at Shiz
                    University in the Land of Oz. After an encounter with the
                    Wonderful Wizard of Oz, their friendship reaches a
                    crossroads.
                  </p>
                  <Button className="bg-white text-black mt-4">
                    <MdOutlinePlayArrow />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
          {/* <CarouselItem key={index}className="text-white w-[1440px] h-[600px] bg-[url(https://assets.murphysmultiverse.com/uploads/2022/02/knight.jpg)] bg-no-repeat bg-cover bg-center">
            
            <div className="pt-[178px] pl-[140px]">
              <p>Now Playing :</p>
              <p className="text-[36px] font-bold">Batman arkham city</p>
              <p className="flex gap-2 items-center">
                <FaStar color="#FDE047" />
                8/10
              </p>
              <p className="w-[500px] text-[12px] font-normal pt-[26px]">
                {" "}
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.
              </p>
              <Button className="bg-white text-black mt-4">
                <MdOutlinePlayArrow />
                Watch Trailer
              </Button>
            </div>
          
          </CarouselItem>
          <CarouselItem key={index} className="text-white w-[1440px] h-[600px] bg-[url(https://wallpapers.com/images/hd/demon-slayer-anime-to-the-swordsmith-village-05crqo0e0fzkql5q.jpg)] bg-no-repeat bg-cover bg-center">
          
            <div className="pt-[178px] pl-[140px]">
              <p>Now Playing :</p>
              <p className="text-[36px] font-bold">Demon Slayer</p>
              <p className="flex gap-2 items-center">
                <FaStar color="#FDE047" />
                8.3/10
              </p>
              <p className="w-[500px] text-[12px] font-normal pt-[26px]">
                {" "}
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.
              </p>
              <Button className="bg-white text-black mt-4">
                <MdOutlinePlayArrow />
                Watch Trailer
              </Button>
            </div>
          
        
                <Card>
                  <CardContent className="flex aspect-video max-h-[600px] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
              </CarouselItem>
             */}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`rounded-full size-4 ${
              index + 1 === current ? "bg-white" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}
