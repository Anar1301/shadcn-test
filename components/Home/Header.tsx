import { ModeToggle } from "./Theme";
import { Genrepage } from "./Genre";
import { SearchSection } from "./SearchSection";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-[60px] bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src="/logo.svg" alt="Movie Z logo" />
          <h2 className="text-lg font-bold text-indigo-700">
            <Link href="/">Movie Z</Link>
          </h2>
        </div>

        {/* Middle section (Genres + Search) */}
        <div className="flex items-center gap-4">
          <Genrepage />
          <SearchSection />
        </div>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </header>
  );
}
