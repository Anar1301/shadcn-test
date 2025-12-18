import React, { Suspense } from "react";
import { HomePageComp, HomePageSkeleton } from "@/src/components/home";

const Home = () => {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePageComp />
    </Suspense>
  );
};
export default Home;
