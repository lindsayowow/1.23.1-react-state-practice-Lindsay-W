// Seed with the provided mock data 

import React from 'react';

function MovieList(props) {

    const filteredMovies = props.selectedGenre === ""
        ? props.movies
        : props.movies.filter(movie => movie.genre === props.selectedGenre);

    return (
        <ul name="filteredList">
            {filteredMovies.map(movie => (
                <li key={movie.id} name="movie">
                    {movie.title}
                </li>
            ))}
        </ul>
    );
}

export default MovieList;