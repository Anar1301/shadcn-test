import { MovieCard } from "@/components/Home";
import { Header } from "@/components/Home/Header";
import { MovieCarousel } from "@/components/Home/MovieCarousel";
import { ChevronRight } from "lucide-react";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

import { MoviesContainer } from "@/components/Home/MoviesContainer";

export default async function Home() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <div className="flex justify-center items-center flex-col w-360">
      <Header />
      <div className="mt-6 w-360"></div>
      <div>
        <MovieCarousel movies={nowPlayingMovies.results} />
        <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
        <MoviesContainer movies={popularMovies.results} title="Popular" />
        <MoviesContainer movies={topRatedMovies.results} title="Top Rated" />
      </div>
    </div>
  );
}
