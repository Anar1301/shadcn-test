import { Moviecard } from "@/components/home/Moviecard";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

type MorePageProps = {
  searchParams: Promise<{ title: string }>;
};

const MorePage = async ({ searchParams }: MorePageProps) => {
  const params = await searchParams;
  const title = params.title;

  const moviesRes: movieResponseType = await getMoviesList(title);
  return (
    <div className="flex gap-4 flex-wrap">
      {moviesRes.results.map((movie) => (
        <Moviecard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          Score={movie.vote_average}
          Image={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default MorePage;
