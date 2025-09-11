import { Input } from "@/components/ui/input";
import { ThemeToggler } from "../Home/ThemeToggler";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
export const Header = () => {
  return (
    <div className=" flex gap-5 justify-between m-auto w-360">
      <div className="flex">
        <img className="h-5 w-5" src="logo.svg" />
        <img className="h-4" src="logo2.png" />
      </div>
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="border-1 rounded-[6px] w-24 flex "><ChevronDown/>Genres</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Genres</DropdownMenuLabel>
            <span>See lists of movies by genre</span>
            <DropdownMenuSeparator />
            <div className="flex">
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Action <ChevronRight />
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Adventure <ChevronRight />
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Animation <ChevronRight />
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Biography <ChevronRight />
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Comedy <ChevronRight />
                </button>
              </DropdownMenuItem>
            </div>
            <div className="flex">
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Crime <ChevronRight />
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Documentary <ChevronRight />
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Drama <ChevronRight />
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Family <ChevronRight />
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button className="border-1 rounded-full font-semibold flex items-center">
                  Fantasy <ChevronRight />
                </button>
              </DropdownMenuItem>
            </div>
        
        
       
  
      <div className="flex">
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Flim-Noir <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Game-Show <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            History <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Horror <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Music <ChevronRight />
          </button>
        </DropdownMenuItem>
      </div>
      <div className="flex">
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Musical <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Mystery <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            News <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Reality-TV <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Romance <ChevronRight />
          </button>
        </DropdownMenuItem>
      </div>
      <div className="flex">
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Sci-Fi <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Short <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Sport <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Talk-Show <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            Thriller <ChevronRight />
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="border-1 rounded-full font-semibold flex items-center">
            War <ChevronRight />
          </button>
        </DropdownMenuItem>
      </div>
      <DropdownMenuItem>
        <button className="border-1 rounded-full font-semibold flex items-center">
          Western <ChevronRight />
        </button>
      </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input className="w-95" />
      </div>
      <ThemeToggler />
      
       
    </div>
  );
};
 