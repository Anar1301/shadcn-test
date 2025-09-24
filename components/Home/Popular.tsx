"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import { Moviecard } from "./Moviecard";
import { movieResponseType } from "../../types";

type PopularProps = {
  movies: movieResponseType;
};

export default function Popular({ movies }: PopularProps) {
  const INITIAL_COUNT = 10;
  const [expanded, setExpanded] = useState(false);

  const moviesToShow = expanded
    ? movies.results
    : movies.results.slice(0, INITIAL_COUNT);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold">Popular</h2>

        {movies.results.length > INITIAL_COUNT && (
          <Button
            className="bg-white text-black flex items-center gap-2"
            onClick={toggleExpanded}
          >
            {expanded ? "Show less" : "See more"}
            <FaChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Movies Grid */}
      <div className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
