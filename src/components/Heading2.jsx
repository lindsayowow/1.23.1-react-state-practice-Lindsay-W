import React from 'react';

function Heading2(props) {
    const myGenre = props.selectedGenre === ""
        ? "All Categories"
        : props.selectedGenre;
    return (
        <>
            <h2>Movies in {myGenre}:</h2>
        </>
    );
}

export default Heading2;