"use client";

import { useState } from "react";
import { SearchSection } from "./SearchSection";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { Genrepage } from "./Genre";
import { genreResponsiveType } from "@/types";

export const MobileSearch = ({
  genresResponse,
}: {
  genresResponse: genreResponsiveType;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block sm:hidden">
      {isOpen ? (
        <div className="flex gap-2">
          <Genrepage />
          <SearchSection />
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
            variant="outline"
          >
            <X />
          </Button>
        </div>
      ) : (
        <div className="flex">
          <div>
            <img src="/assets/moviez.png" className="h-5" />
          </div>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Search />
          </Button>
        </div>
      )}
    </div>
  );
};
