"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";
import { Moviecard } from "@/components/home/Moviecard";
import { movieResponseType } from "../../types";

type MovieLikeThisProps = {
  MorelikeThis: movieResponseType;
};

export default function MovieLikeThis({ MorelikeThis }: MovieLikeThisProps) {
  const INITIAL_COUNT = 5;
  const [expanded, setExpanded] = useState(false);

  const moviesToShow = expanded
    ? MorelikeThis.results
    : MorelikeThis.results.slice(0, INITIAL_COUNT);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">More like this</h2>
        {MorelikeThis.results.length > INITIAL_COUNT && (
          <Button
            onClick={toggleExpanded}
            className="bg-white text-black flex items-center gap-2"
          >
            {expanded ? "Show less" : "See more"}
            <FaChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-fr">
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
  );
}
