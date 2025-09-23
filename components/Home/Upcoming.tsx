"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import { Moviecard } from "./Moviecard";
import { movieResponseType } from "../../types";

type UpcomingProps = {
  movies: movieResponseType;
};

export default function Upcoming({ movies }: UpcomingProps) {
  const [visibleCount, setVisibleCount] = useState(10); // show first 6

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 10); // load 6 more each time
  };

  return (
    <div>
      <div className="flex justify-between pl-30 pt-10">
        <div className="text-[24px] font-semibold">Upcoming</div>

        {visibleCount < movies.results.length && (
          <Button className="bg-white text-black" onClick={handleSeeMore}>
            See more{" "}
            <FaChevronRight color="black" className="w-[16px] h-[16px]" />
          </Button>
        )}
      </div>

      <div className="ml-40 mt-10">
        <div className="flex flex-wrap gap-4">
          {movies.results.slice(0, visibleCount).map((movie) => (
            <Moviecard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              Score={movie.vote_average}
              Image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
