"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import { Moviecard } from "./Moviecard";
import { movieResponseType } from "../../types";

type TopRatedProps = {
  movies: movieResponseType; // pass movies from parent
};

export default function TopRated({ movies }: TopRatedProps) {
  const INITIAL_COUNT = 10; // first 6 movies
  const [expanded, setExpanded] = useState(false);

  const moviesToShow = expanded
    ? movies.results
    : movies.results.slice(0, INITIAL_COUNT);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div>
      <div className="flex justify-between pl-30 pt-10">
        <div className="text-[24px] font-semibold">Top rated</div>

        {movies.results.length > INITIAL_COUNT && (
          <Button className="bg-white text-black" onClick={toggleExpanded}>
            {expanded ? "Show less" : "See more"}{" "}
            <FaChevronRight color="black" className="w-[16px] h-[16px]" />
          </Button>
        )}
      </div>

      <div className="ml-40 mt-10">
        <div className="flex flex-wrap gap-4">
          {moviesToShow.map((movie) => (
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
