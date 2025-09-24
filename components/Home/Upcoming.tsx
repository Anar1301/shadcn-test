"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import { Moviecard } from "./Moviecard";
import { movieResponseType } from "../../types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
type UpcomingProps = {
  movies: movieResponseType;
};

export default function Upcoming({ movies }: UpcomingProps) {
  const INITIAL_COUNT = 10; // initial visible movies
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleToggle = () => {
    if (visibleCount >= movies.results.length) {
      setVisibleCount(INITIAL_COUNT); // collapse
    } else {
      setVisibleCount(movies.results.length); // expand
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold">Upcoming</h2>

        {movies.results.length > INITIAL_COUNT && (
          <Button
            className="bg-white text-black flex items-center gap-2"
            onClick={handleToggle}
          >
            {visibleCount >= movies.results.length ? "Show less" : "See more"}
            <FaChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Movie List */}
      <div className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
