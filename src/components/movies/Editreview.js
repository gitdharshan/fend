import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../hooks/form-hook';
import Input from '../UI/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../validators/Validator';
import './Addreview.css';

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

const Editreview = () => {
  const { movieId } = useParams(); // Correctly use `movieId` from useParams

  // Find the movie based on the movieId
  const IdentifiedMovie = DUMMY_MOVIES.find((movie) => movie.id === movieId);

  const { formState, inputHandler } = useForm({
    movie_name: {
      value: IdentifiedMovie ? IdentifiedMovie.movie_name : '',
      isValid: true,
    },
    description: {
      value: IdentifiedMovie ? IdentifiedMovie.description : '',
      isValid: true,
    },
  });

  useEffect(() => {
    // Reset form with the values of the identified movie
    if (IdentifiedMovie) {
      inputHandler('movie_name', IdentifiedMovie.movie_name, true);
      inputHandler('description', IdentifiedMovie.description, true);
    }
  }, [IdentifiedMovie, inputHandler]);

  // If no movie is found, display an error message
  if (!IdentifiedMovie) {
    return (
      <div className="center">
        <h1>No movies found</h1>
      </div>
    );
  }

  // Handle form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // Handle the form submission logic here (e.g., update the movie details)
    console.log(formState);
  };

  return (
    <form className="place-form" onSubmit={formSubmitHandler}>
      {/* Correctly pass the movie_name to the value of movie_name */}
      <Input
        id="movie_name"
        element="input"
        type="text"
        label="Movie"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid movie name"
        onInput={inputHandler}
        value={formState.inputs.movie_name.value}
        valid={formState.inputs.movie_name.isValid}
      />
      <Input
        id="description"
        element="input"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={inputHandler}
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
      />
      <button type="submit">UPDATE MOVIE</button>
    </form>
  );
};

export default Editreview;
