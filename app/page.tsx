import { MovieCard } from "@/components/Home";
export default function Home() {
  return (
    <div className="p-20">
      <h1 className="size-[24px] font-bold color-black">Upcoming</h1>
      <div className="flex m-2 gap-2.5 w-300 flex-wrap">
        
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
  <h1 className="size-[24px] font-bold color-black">Popular</h1>
  <div className="flex m-2 gap-2.5 w-300 flex-wrap">
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
    image="/pic10.png"
    />
  </div>
  <h1 className="flexsize-[24px] font-bold color-black">Top Rated </h1>
  <div className="flex m-2 gap-2.5 w-300 flex-wrap">
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
  </div>
    </div>
  

  )
}
