import React from "react";
import { Label } from "@/src/components/ui";

export const NoResultsMsgComp = () => {
  return (
    <div>
      <Label className="w-full h-[95px] justify-center border border-border rounded-lg">
        No results found.
      </Label>
    </div>
  );
};
