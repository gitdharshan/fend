import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './MoviesItem.css';


const MoviesItem = (props) => {
  return (
    <li className='movie-item'>
      <div className='movie-item__image'>
        <img src={props.image} alt={props.movie_name} />
      </div>
      <div className='movie-item__info'>
        <h2>{props.movie_name}</h2>
        <h3><strong>Rating:</strong> {props.rating}</h3>
        <p><strong>Year:</strong> {props.info}</p>
        <p><strong>Description:</strong> {props.description}</p>
      </div>
      
      <div className='movie-item__actions'>
        {/* Use Link to navigate to the edit page */}
        <Link to={`/movies/${props.id}`} className='edit-btn'>EDIT</Link>
        <button className='delete-btn' danger>DELETE</button>
      </div>
    </li>
  );
};

export default MoviesItem;
