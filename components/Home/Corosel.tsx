"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { MovieType } from "../../types";
import { GiPlayButton } from "react-icons/gi";
import Image from "next/image";

type MovieCarouselProps = {
  movies: MovieType[];
  Movietrailer?: string;
};

export const Corosel = ({ movies }: MovieCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {movies.slice(0, 10).map((movie) => (
          <CarouselItem
            key={movie.id}
            className="relative text-white w-full h-[50vh] md:h-[70vh] lg:h-[50vh]"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            <div className="absolute top-1/2 left-6 md:left-20 -translate-y-1/2 max-w-[90%] md:max-w-[600px]">
              <p className="text-sm md:text-base">Now Playing :</p>
              <p className="text-xl md:text-3xl lg:text-5xl font-bold">
                {movie.title}
              </p>

              <p className="flex gap-2 items-center text-sm md:text-lg pt-2">
                <FaStar className="h-5 w-5 md:h-7 md:w-7" color="#FDE047" />
                {movie.vote_average}
                <span className="text-gray-300 text-xs md:text-sm">/10</span>
              </p>

              <p className="text-xs md:text-sm font-normal pt-4 line-clamp-3">
                {movie.overview}
              </p>

              <Button className="absolute top-70 left-4 rounded-full flex items-center gap-2 bg-white text-black">
                <GiPlayButton /> Play Trailer
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2 md:left-5" />
      <CarouselNext className="right-2 md:right-5" />

      {/* Dots */}
      <div className="flex gap-2 items-center justify-center mt-10 w-[375px] sm:w-[1440px]">
        {Array.from({ length: count })
          .slice(0, 10)
          .map((_, index) => (
            <div
              onClick={() => api?.scrollTo(index)}
              key={index}
              className={`rounded-full size-2 md:size-3 lg:size-4 cursor-pointer transition-colors ${
                index + 1 === current ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
      </div>
    </Carousel>
  );
};
