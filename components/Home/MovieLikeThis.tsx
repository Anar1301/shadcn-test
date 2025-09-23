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
  const INITIAL_COUNT = 5; // show first 5
  const [expanded, setExpanded] = useState(false);

  const moviesToShow = expanded
    ? MorelikeThis.results
    : MorelikeThis.results.slice(0, INITIAL_COUNT);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div>
      <div className="flex justify-between mt-10 ml-42 w-[1200px]">
        <div className="text-4xl font-bold">More like this</div>
        {MorelikeThis.results.length > INITIAL_COUNT && (
          <Button onClick={toggleExpanded}>
            {expanded ? "Show less" : "See more"} <FaChevronRight />
          </Button>
        )}
      </div>

      <div className="flex gap-6 ml-42 mt-10 flex-wrap w-[1280px]">
        {moviesToShow.map((movie) => (
          <Moviecard
            key={movie.id}
            title={movie.title}
            Score={movie.vote_average}
            Image={movie.poster_path}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
