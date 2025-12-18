import { Moviecard } from "@/components/home/Moviecard";
import { genreResponsiveType, GenreType, movieResponseType } from "@/types";
import { getSearchedMovies, GetGenreList } from "@/utils/get-data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type SearchGenrePageProps = {
  searchParams: Promise<{ value: string; id: string; genre: string }>;
};

const SearchPage = async ({ searchParams }: SearchGenrePageProps) => {
  const params = await searchParams;
  const searchValue = params.value;

  const searchedMoviesResponse: movieResponseType = await getSearchedMovies(
    searchValue
  );
  const genreList: genreResponsiveType = await GetGenreList();

  return (
    <main className="h-fit w-[375px] sm:w-[1280px mx-auto sm:mt-20">
      <h1 className="text-foreground  text-[24px] sm:text-4xl font-bold">
        Search Filter: {searchedMoviesResponse.type} results for “{searchValue}”
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Movies Grid */}
        <div className="sm:block hidden">
          {" "}
          <div className="flex flex-wrap gap-4 w-[375px] sm:w-[970px]">
            {searchedMoviesResponse.results.length > 0 ? (
              ""
            ) : (
              <div className="text-black h-[95px] w-[804px] mt-50 ml-30 mb-100 bg-white border flex items-center justify-center">
                <div> No results found</div>
              </div>
            )}
            {searchedMoviesResponse.results.slice(0, 10).map((movie) => (
              <div key={movie.id}>
                <Moviecard
                  title={movie.title}
                  Score={movie.vote_average}
                  Image={movie.poster_path}
                  id={movie.id}
                ></Moviecard>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:hidden block">
          {" "}
          <div className="flex flex-wrap gap-4 w-[375px] sm:w-[970px]">
            {searchedMoviesResponse.results.length > 0 ? (
              ""
            ) : (
              <div className="text-black h-[95px] w-[804px] sm:mt-50 sm:ml-30 sm:mb-100 bg-white border flex items-center justify-center">
                <div> No results found</div>
              </div>
            )}
            {searchedMoviesResponse.results.slice(0, 5).map((movie) => (
              <div key={movie.id}>
                <Moviecard
                  title={movie.title}
                  Score={movie.vote_average}
                  Image={movie.poster_path}
                  id={movie.id}
                ></Moviecard>
              </div>
            ))}
          </div>
        </div>

        {/* Genre Sidebar */}
        <aside className="flex flex-wrap mt-10  h-[400px]  sm:mt-10 sm:ml-20 gap-4 justify-start ">
          <div className="pl-2  mb-2 sm:h-0 h-[0px]">
            <h2 className="text-xl font-semibold mb-2">Genres</h2>
            <p className="mb-4 text-sm text-gray-600">
              See lists of movies by genre
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:w-[387px]">
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
