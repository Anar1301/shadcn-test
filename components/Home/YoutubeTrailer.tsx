"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GiPlayButton } from "react-icons/gi";

type Youtubeprops = {
  Movietrailer: string | undefined;
  title?: string;
  image: string;
};

export function Youtubedialog({ Movietrailer, title, image }: Youtubeprops) {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden">
      {/* Background Image */}
      <img
        src={`https://image.tmdb.org/t/p/original/${image}`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="absolute bottom-4 left-4 rounded-full flex items-center gap-2 bg-white text-black">
            <GiPlayButton /> Play Trailer
          </Button>
        </DialogTrigger>

        <DialogContent className="w-full max-w-3xl aspect-video p-0 bg-black">
          <DialogTitle></DialogTitle>
          <div
            className="relative w-[1400px] h-[760px] mt-[-100px] ml-[-400px]"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${Movietrailer}`}
              title={title}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
