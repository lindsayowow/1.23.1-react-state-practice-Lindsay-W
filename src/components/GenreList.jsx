// Seed with the provided mock data 

import React from 'react';

function GenreList(props) {
return (
    <div name="genres">
        {props.genres.map(genre => (
            <div key={genre.id} onClick={() => props.updateCurrentGenre(genre.name)} 
            className={genre.name === props.selectedGenre ? "selected" : ""}
>
                {genre.name}
            </div>
        ))}
    </div>
)
}

export default GenreList;