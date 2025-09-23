import React from "react";
import { Corosel } from "@/components/home/Corosel";

import Upcoming from "@/components/home/Upcoming";

import TopRated from "@/components/home/TopRated";
import Popular from "@/components/home/Popular";

import { getMoviesList } from "../../utils/get-data";

import { movieResponseType } from "../../types";

const upcomingMovies: movieResponseType = await getMoviesList("now_playing");
const topRatedMovies = await getMoviesList("top_rated");
const popularMovies = await getMoviesList("popular");
const Homepage = () => {
  return (
    <div>
      {" "}
      <div className="w-[1440px] flex flex-col ">
        <div className="ml-30">
          <Corosel movies={upcomingMovies.results}></Corosel>
        </div>

        <div>
          <Upcoming movies={upcomingMovies}></Upcoming>
        </div>
        <div>
          <Popular movies={popularMovies}></Popular>
        </div>
        <div>
          <TopRated movies={topRatedMovies}></TopRated>
        </div>
        <div className="mt-10"></div>
      </div>
    </div>
  );
};

export default Homepage;
