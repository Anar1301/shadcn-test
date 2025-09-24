import { Corosel } from "@/components/home/Corosel";
import Upcoming from "@/components/home/Upcoming";
import TopRated from "@/components/home/TopRated";
import Popular from "@/components/home/Popular";
import { getMoviesList } from "../../utils/get-data";

export default async function Homepage() {
  const upcomingMovies = await getMoviesList("now_playing");
  const topRatedMovies = await getMoviesList("top_rated");
  const popularMovies = await getMoviesList("popular");

  return (
    <div className="w-[1440px] flex flex-col">
      <div className="ml-30">
        <Corosel movies={upcomingMovies.results} />
      </div>

      <Upcoming movies={upcomingMovies} />
      <Popular movies={popularMovies} />
      <TopRated movies={topRatedMovies} />

      <div className="mt-10" />
    </div>
  );
}
