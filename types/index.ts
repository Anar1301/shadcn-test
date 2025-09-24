export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  runtime: number;
  genres: GenreType[];
  crew: string[];
  name: string;
  vote_count: number;
  src: string;
  type: string;
  key: string;
  genre: any;
  results: number;
};

export type movieResponseType = {
  page: number;
  totalPages: number;
  id: number;
  results: MovieType[];
  total_results: number;
  name: string;
  key: string;
  type: string;
  genre: any;
  link: string;
};
export type genreResponsiveType = {
  genres: GenreType[];
};
export type CrewType = {
  job: string;
  name: string;
  id: string;
};
export type GenreType = {
  id: string;
  name: string;
};

export type Directorname = {
  cast: CrewType[];
  crew: CrewType[];
};
