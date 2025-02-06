import React from 'react';
import MoviesItem from './MoviesItem';
import Card from './pages/users/Element/Card';

const MoviesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="movie-list center">
      <Card>
      <h2>No Movies Found</h2>
      <button>Create</button>
      </Card>
     
      </div>
    );
  }

  return (
    <ul className="movie-list">
      {props.items.map((movie) => (
        <MoviesItem
          key={movie.id}
          id={movie.id}
          image={movie.imageUrl}
          movie_name={movie.movie_name}
          info={movie.info}
          description={movie.description}
          rating={movie.rating}
          creatorId={movie.creatorId}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
