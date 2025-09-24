import { Moviecard } from "@/components/home/Moviecard";
import { genreResponsiveType, GenreType, movieResponseType } from "@/types";
import { getSearchedMovies, GetGenreList } from "@/utils/get-data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type SearchGenrePageProps = {
  searchParams: Promise<{ value: string; id: string; genre: any }>;
};

const SearchPage = async ({ searchParams }: SearchGenrePageProps) => {
  const params = await searchParams;
  const searchValue = params.value;

  const searchedMoviesResponse: movieResponseType = await getSearchedMovies(
    searchValue
  );
  const genreList: genreResponsiveType = await GetGenreList();

  return (
    <main className="max-w-7xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-6">
        Search Filter: {searchedMoviesResponse.type} results for “{searchValue}”
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Movies Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {searchedMoviesResponse.results.slice(0, 12).map((movie) => (
            <Moviecard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              Score={movie.vote_average}
              Image={movie.poster_path}
            />
          ))}
        </div>

        {/* Genre Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <h2 className="text-xl font-semibold mb-2">Genres</h2>
          <p className="mb-4 text-sm text-gray-600">
            See lists of movies by genre
          </p>
          <div className="flex flex-wrap gap-2">
            {genreList.genres.map((genre: GenreType) => (
              <Link
                key={genre.id}
                href={`/search?id=${genre.id}`}
                className="flex items-center gap-1 border rounded-full py-1 px-3 text-sm hover:bg-gray-200 transition"
              >
                {genre.name} <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
};

export default SearchPage;
