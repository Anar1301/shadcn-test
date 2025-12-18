import React, { Suspense } from "react";
import {
  DetailsDynamicPageComp,
  DetailsDynamicPageSkeleton,
} from "@/src/components/details";
import { getMovieDetails } from "@/src/utils/get-data";
import { MovieDetailsType } from "@/src/types";

type DetailsPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: DetailsPageProps) => {
  const { id } = await params;
  const movieDetails: MovieDetailsType = await getMovieDetails(id);

  return {
    title: `MovieZ | ${movieDetails?.title}`,
  };
};

const DetailsPage = ({ params }: DetailsPageProps) => {
  return (
    <Suspense fallback={<DetailsDynamicPageSkeleton />}>
      <DetailsDynamicPageComp params={params} />
    </Suspense>
  );
};
export default DetailsPage;
