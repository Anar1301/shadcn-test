import { FaStar } from "react-icons/fa";
import { CrewType, GenreType } from "@/types";
import { Youtubedialog } from "./YoutubeTrailer";

type MovieCardProps = {
  title: string;
  Score: number;
  Image: string;
  id: number;
  releasedate: string;
  runtime: number;
  backdrop_path: string;
  genres: GenreType[];
  overview: string;
  crew: CrewType[];
  cast: CrewType[];
  vote_count: number;
  Movietrailer: any;
  type?: string;
};

export const Moviedescribecard = ({
  title,
  Score,
  Image,
  releasedate,
  runtime,
  backdrop_path,
  genres,
  overview,
  crew,
  cast,
  Movietrailer,
  type,
}: MovieCardProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* Title and Rating */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          <p className="text-sm md:text-base text-gray-400">
            {releasedate} • PG • {runtime} min
          </p>
        </div>

        <div className="flex items-center gap-2">
          <FaStar color="#FACC15" className="w-5 h-5" />
          <span className="text-lg md:text-xl font-semibold">{Score}/10</span>
        </div>
      </div>

      {/* Poster + Trailer */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <img
          src={`https://image.tmdb.org/t/p/w500/${Image}`}
          alt={title}
          className="w-full md:w-[290px] h-auto md:h-[428px] object-cover rounded-lg"
        />
        <div className="flex-1">
          <Youtubedialog
            image={backdrop_path}
            Movietrailer={Movietrailer}
            title={type}
          />
        </div>
      </div>

      {/* Genres */}
      <div className="flex flex-wrap gap-2 mt-6">
        {genres.map((genre) => (
          <span
            key={genre.id}
            className="px-3 py-1 border border-white rounded-md text-sm md:text-base"
          >
            {genre.name}
          </span>
        ))}
      </div>

      {/* Overview */}
      <p className="mt-6 text-sm md:text-base leading-relaxed">{overview}</p>

      {/* Crew & Cast */}
      <div className="mt-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <span className="font-semibold w-24">Director:</span>
          <div className="flex flex-wrap gap-2">
            {crew
              .filter((c) => c.job === "Director")
              .map((c) => (
                <span key={c.id}>{c.name}</span>
              ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <span className="font-semibold w-24">Writers:</span>
          <div className="flex flex-wrap gap-2">
            {crew
              .filter((c) =>
                ["Story", "Novel", "Original Story", "Producer"].includes(c.job)
              )
              .map((c) => (
                <span key={c.id}>{c.name}</span>
              ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <span className="font-semibold w-24">Stars:</span>
          <div className="flex flex-wrap gap-2">
            {cast.slice(0, 3).map((c) => (
              <span key={c.id}>{c.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
