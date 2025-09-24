import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { getGenremovies } from "../../utils/get-data";

export async function Genrepage() {
  const Genremoviesresponse = await getGenremovies();

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border">
              Genre
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              {/* Header */}
              <div className="px-2">
                <div className="text-lg md:text-2xl font-semibold">Genre</div>
                <div className="pb-4 pt-2 text-sm md:text-base text-gray-600">
                  See lists of movies by genre
                </div>
              </div>

              {/* Genre list */}
              <div className="flex flex-wrap gap-2 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl">
                {Genremoviesresponse.genres.map(
                  (genre: { id: string; name: string }) => (
                    <Link
                      key={genre.id}
                      href={`/genre?id=${genre.id}&name=${genre.name}&page=1`}
                    >
                      <NavigationMenuLink asChild>
                        <div className="flex items-center gap-2 px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition">
                          <span className="text-xs md:text-sm font-medium">
                            {genre.name}
                          </span>
                          <FaChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-800 dark:text-gray-200" />
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  )
                )}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
