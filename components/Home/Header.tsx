import { ModeToggle } from "./Theme";
import { Genrepage } from "./Genre";
import { SearchSection } from "./SearchSection";
import Link from "next/link";
import { MobileSearch } from "./MobileSearch";
import Image from "next/image";

export const Header = async () => {
  // const genresResponse: genreResponsiveType = await GetGenreList();
  return (
    <header className="w-full h-[60px] bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            className="w-5 h-5 hidden sm:block"
            src="logo.svg"
            alt="Movie Z logo"
          />
          <h2 className="text-lg font-bold text-indigo-700">
            <Link href="/">Movie Z</Link>
          </h2>
        </div>
        <div className="gap-5 hidden sm:flex">
          <Genrepage />

          {/* Middle section (Genres + Search) */}
          <div className="flex items-center gap-4">
            <SearchSection />

            <MobileSearch />

            {/* Theme Toggle */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
