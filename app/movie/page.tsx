import React from "react";
import { Directorname, movieResponseType, MovieType } from "../../types";
import {
  Getmoviesdescribtion,
  GetmoviesDirectorsname,
  GetmoviesMorelikethis,
  GetmoviesTrailer,
} from "../../utils/get-data";
import { Moviedescribecard } from "@/components/home/Moviedescribe";
import { Moviecard } from "@/components/home/Moviecard";

import MovieLikeThis from "@/components/home/MovieLikeThis"; // ✅ Client wrapper
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";

type MovieidPageProps = {
  searchParams: { id: string };
};

const Movieid = async ({ searchParams }: MovieidPageProps) => {
  const id = searchParams.id;

  const Moviebyid: MovieType = await Getmoviesdescribtion(id);
  const Moviedirectorname: Directorname = await GetmoviesDirectorsname(id);
  const MorelikeThis: movieResponseType = await GetmoviesMorelikethis(id);
  const Movietrailer: movieResponseType = await GetmoviesTrailer(id);

  const trailer = Movietrailer.results.find((item) => item.type === "Trailer");

  return (
    <div>
      <Moviedescribecard
        title={Moviebyid.title}
        Score={Moviebyid.vote_average}
        Image={Moviebyid.poster_path}
        releasedate={Moviebyid.release_date}
        id={Moviebyid.id}
        runtime={Moviebyid.runtime}
        backdrop_path={Moviebyid.backdrop_path}
        genres={Moviebyid.genres}
        overview={Moviebyid.overview}
        crew={Moviedirectorname.crew}
        cast={Moviedirectorname.cast}
        vote_count={Moviebyid.vote_count}
        Movietrailer={trailer?.key}
        type={trailer?.name}
      />

      {/* ✅ Client-side “More like this” section */}
      <MovieLikeThis MorelikeThis={MorelikeThis} />
      <Link
        // href={`/Morelikethis?id=${MorelikeThis.id}`}
        href={`/Morelikethispage?id=${id}&title=${Moviebyid.title}`}
      >
        <Button>
          See more{" "}
          <FaChevronRight color="black" className="w-[16px] h-[16px]" />
        </Button>
      </Link>
    </div>
  );
};

export default Movieid;
