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
    <div className="w-full flex justify-center mt-6">
      <NavigationMenu className="shadow-lg rounded-lg border bg-white dark:bg-gray-900 px-4 py-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            {/* Trigger */}
            <NavigationMenuTrigger className="text-lg font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              🎬 Genre
            </NavigationMenuTrigger>

            {/* Dropdown content */}
            <NavigationMenuContent className="p-6 rounded-xl shadow-xl bg-white dark:bg-gray-900">
              {/* Header */}
              <div className="px-2 mb-6">
                <div className="text-2xl font-bold">Browse by Genre</div>
                <div className="pt-2 text-gray-600 dark:text-gray-400 text-base">
                  Pick a genre and explore movies you’ll love
                </div>
              </div>

              {/* Genre list */}
              <div className="flex gap-4 max-w-5xl">
                {Genremoviesresponse.genres.map(
                  (genre: { id: string; name: string }) => (
                    <Link
                      key={genre.id}
                      href={`/genre?id=${genre.id}&name=${genre.name}&page=1`}
                    >
                      <NavigationMenuLink asChild>
                        <div className="flex items-center justify-between px-4 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition text-base font-medium">
                          <span>{genre.name}</span>
                          <FaChevronRight className="w-4 h-4 text-gray-500" />
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
