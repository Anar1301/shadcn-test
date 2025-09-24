"use client";

import { Moviecard } from "@/components/home/Moviecard";
import { movieResponseType } from "../../types";
import { getMoviesbygenreid, getGenremovies } from "../../utils/get-data";
import { PaginationDemo } from "@/components/home/Paginition";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type GenrePageProps = {
  searchParams: Promise<{ id: string; page: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const page = params.page;

  const filteredMoviesResponse: movieResponseType = await getMoviesbygenreid(
    id,
    page
  );

  const Genremoviesresponse = await getGenremovies();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-4xl font-bold">Search Filter</h2>
        <h2 className="text-4xl font-bold">
          {filteredMoviesResponse.total_results} titles
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Genre Sidebar */}
        <div className="flex-shrink-0 w-full lg:w-72">
          <div className="mb-4">
            <div className="text-2xl font-semibold">Genre</div>
            <div className="text-base pt-1 pb-3">
              See lists of movies by genre
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {Genremoviesresponse.genres.map(
              (genre: { id: string; name: string }) => (
                <Link key={genre.id} href={`/genre?id=${genre.id}&page=1`}>
                  <Button className="flex items-center gap-2 w-full justify-between">
                    <span className="text-sm font-semibold">{genre.name}</span>
                    <FaChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
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

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <PaginationDemo />
      </div>
    </div>
  );
};

export default Genre;
