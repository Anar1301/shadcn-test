"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

type MovieCardProps = {
  title: string;
  Score: number;
  Image: string;
  id: number;
};

export const Moviecard = ({ title, Score, Image, id }: MovieCardProps) => {
  return (
    <Link href={`/movie?id=${id}`}>
      <Card className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
        {/* Movie Poster */}
        <CardContent className="relative w-full aspect-[2/3] p-0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${Image}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col p-2 gap-1">
          <CardDescription className="flex items-center gap-1 text-sm">
            <FaStar color="#FDE047" />
            <span>{Score}</span>/10
          </CardDescription>
          <CardTitle className="text-base font-semibold line-clamp-2">
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};
