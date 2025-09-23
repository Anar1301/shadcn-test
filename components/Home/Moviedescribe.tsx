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
  id,
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
    <div className="w-[1068px] h-fit ml-42">
      {" "}
      <div className="flex  justify-between w-[1068px]">
        <div>
          <div>{title}</div>
          <div>
            {releasedate} PG {runtime}
          </div>
        </div>

        <div>
          {" "}
          <div>Rating</div>
          <div className="flex">
            <FaStar color="yellow"></FaStar>
            {Score}/10
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${Image}`}
          alt=""
          className="w-[290px] h-[428px] object-cover"
        />

        <div>
          <Youtubedialog
            image={backdrop_path}
            Movietrailer={Movietrailer}
            title={type}
          ></Youtubedialog>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="border w-[100px] rounded-md border-white text-center"
          >
            {genre.name}
          </div>
        ))}
      </div>
      <div className="mt-10">{overview}</div>
      <div className="text-2xl font-bold flex flex-col gap-4 mt-10">
        <div className="flex  items-center gap-10">
          <div> Director</div>
          <div className="text-[16px] font-normal">
            {crew.map((crew) => {
              if (crew.job === "Director") {
                return <div key={crew.id}>{crew.name}</div>;
              }
            })}
          </div>
        </div>
        <div className="flex  items-center gap-10">
          <div> Writers</div>
          <div className="text-[16px] font-normal">
            {crew.map((crew) => {
              if (
                crew.job === "Story" ||
                crew.job === "Novel" ||
                crew.job === "Original Story" ||
                crew.job === "Producer"
              ) {
                return <div key={crew.id}>{crew.name}</div>;
              }
            })}
          </div>
        </div>
        <div className="flex  items-center gap-10">
          <div> Stars</div>
          <div className="text-[16px] font-normal flex  gap-4">
            {cast.slice(0, 3).map((cast) => {
              return <div key={cast.id}>{cast.name}</div>;
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
