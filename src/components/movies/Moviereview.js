import React from 'react';
import { useParams } from 'react-router-dom';
import MoviesList from '../../components/MoviesList'

const DUMMY_MOVIES = [
  {
    id: 'p1',
    movie_name: "RRR",
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    info: "2022",
    rating: 8,
    description: "One of the highest grossing movies in 2022",
    creator: 'u1',
  },
  {
    id: 'p2',
    movie_name: "KGF-2",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZmQzZjVkZTUtYjI4ZC00ZDJmLWI0ZDUtZTFmMGM1Mzc5ZjIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    info: "2022",
    rating: 9,
    description: "Second highest grossing movie in 2022",
    creator: 'u2',
  },
];

const Moviereview = () => {
  const { movieId } = useParams();
  const filteredMovies = DUMMY_MOVIES.filter((movie) => movie.id === movieId || !movieId);

  return <MoviesList items={filteredMovies} />;
};

export default Moviereview;
