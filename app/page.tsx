import { MovieCard} from "@/components/Home";
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
  // const getUpcomingMovies = async () => {
  //   const res = await fetch(
  //     "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  //     {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   return data;
  // };
// const upcomingMovies: movieResponseType = await getUpcomingMovies();
  return (
    
    <div className="flex justify-center items-center flex-col w-360">
      <Header/>
    <div className="mt-6 w-360">
      
     
    </div> 
    <div>
      <MovieCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
      <MoviesContainer movies={popularMovies.results} title="Popular" />
      <MoviesContainer movies={topRatedMovies.results} title="Top Rated" />
    </div>
    {/* <div className="flex justify-between w-360 m-auto">
      <h1 className="font-bold text-6 text-black">Upcoming</h1>
      <button className="flex">
        See more<ChevronRight/>
      </button>
    </div> */}
    {/* <div className="flex justify-center items-center gap-5 flex-wrap w-360">
        {upcomingMovies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div> */}
      
      {/* <div className="flex justify-center flex-wrap w-300 m-auto">
        
    <MovieCard
    title="Dear Santa"
    score={6.9}
    image="/pic1.png"
    />
    <MovieCard
    title="How To Train Your Dragon Live Action"
    score={6.9}
    image="/pic2.png"
    />
    <MovieCard
    title="Alien Romulus"
    score={6.9}
    image="/pic3.png"
    />
    <MovieCard
    title="From the Ashes"
    score={6.9}
    image="/pic4.png"
    />
    <MovieCard
    title="Space Dogg"
    score={6.9}
    image="/pic6.png"
    />
    <MovieCard
    title="Dear Santa"
    score={6.9}
    image="/pic1.png"
    />
    <MovieCard
    title="How To Train Your Dragon Live Action"
    score={6.9}
    image="/pic2.png"
    />
    <MovieCard
    title="Alien Romulus"
    score={6.9}
    image="/pic3.png"
    />
    <MovieCard
    title="From the Ashes"
    score={6.9}
    image="/pic4.png"
    />
    <MovieCard
    title="Space Dogg"
    score={6.9}
    image="/pic6.png"
    />
   
  </div>
  <div className="flex justify-between items-center w-320">
      <h1 className="font-bold text-6 text-black">Popular</h1>
      <button className="flex">
        See more<ChevronRight/>
      </button>
    </div>
  <div className="flex justify-center flex-wrap w-300 m-auto">
    <MovieCard
    title="The Order"
    score={6.9}
    image="/pic7.png"
    />
    <MovieCard
    title="Solo Leveling: ReAwakening"
    score={9.9}
    image="/pic5.png"
    />
    <MovieCard
    title="Sonic the Hedgehog 3"
    score={9.9}
    image="/pic8.png"
    />
    <MovieCard
    title="The Shawshank Redemption"
    score={9.9}
    image="/pic9.png"
    />
    <MovieCard
    title="The Godfather"
    score={9.9}
    image="/pic10.png"/>
    <MovieCard
    title="The Order"
    score={6.9}
    image="/pic7.png"
    />
    <MovieCard
    title="Solo Leveling: ReAwakening"
    score={9.9}
    image="/pic5.png"
    />
    <MovieCard
    title="Sonic the Hedgehog 3"
    score={9.9}
    image="/pic8.png"
    />
    <MovieCard
    title="The Shawshank Redemption"
    score={9.9}
    image="/pic9.png"
    />
    <MovieCard
    title="The Godfather"
    score={9.9}
    image="/pic10.png"/>
  </div>
  <div className="flex justify-between items-center w-320">
      <h1 className="font-bold text-6 text-black">Top Rated</h1>
      <button className="flex">
        See more<ChevronRight/>
      </button>
    </div>
  <div className="flex justify-center flex-wrap w-300 m-auto">
    <MovieCard
   title="Pulp Fiction"
    score={6.9}
    image="/pic11.png"
    />
    <MovieCard
    title="The Lord of the Rings: Fellowship of the Kings"
    score={9.9}
    image="/pic12.png"
    />
    <MovieCard
    title="The Good, the Bad and the Ugly"
    score={9.9}
    image="/pic13.png"
    />
    <MovieCard
    title="Forrest Gump"
    score={9.9}
    image="/pic14.png"
    />
    <MovieCard
    title="Terminator 2: Judgement Day"
    score={9.9}
    image="/pic15.png"
    />
    <MovieCard
    title="Pulp Fiction"
    score={6.9}
    image="/pic11.png"
    />
    <MovieCard
    title="The Lord of the Rings: Fellowship of the Kings"
    score={9.9}
    image="/pic12.png"
    />
    <MovieCard
    title="The Good, the Bad and the Ugly"
    score={9.9}
    image="/pic13.png"
    />
    <MovieCard
    title="Forrest Gump"
    score={9.9}
    image="/pic14.png"
    />
    <MovieCard
    title="Terminator 2: Judgement Day"
    score={9.9}
    image="/pic15.png"
    />
  </div> */}
  
    </div>
  

  )
}
