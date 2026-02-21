// Use an App component as the main container 
// for your data and state. 
// Use state to manage: 
// ○ currentGenre (string): Tracks the currently selected genre. 
// ○ movies (array): Contains the data for all available movies. 
// ● Pass state variables and setters as needed to the child components using 
// props. 
// ● Display a list of genres based on the available movie data. 
// ● Allow the user to select a genre (for example, by clicking on a genre name). 
// ● Display only the movies that match the selected genre. 
// ● Update the movie list automatically when the user selects a different genre. 
// 1 
// ● Use conditional rendering to display an error message if the user selects a 
// genre with no movies. 
// Think about where state should live so that both components update correctly 
// when a genre is selected. 
// When the app loads, the user sees a list of genres. 
// ● Clicking a genre updates the movie list to show only those movies. 
// ● If the user clicks another genre, the movie list updates again without needing 
// a refresh. 
//stretch:
// ● Highlight the currently selected genre. 
// ● Add a “Show All” option to display all movies. 


import Header from './components/Header';
import Heading1 from './components/Heading1';
import Heading2 from './components/Heading2';
import Footer from './components/Footer';
import GenreList from './components/GenreList';
import MovieList from './components/MovieList';
import { genres } from './mock-data/genres';
import { movies } from './mock-data/movies';
import React, { useState } from 'react';
import './App.css';



function App() {
	let [currentGenre,setCurrentGenre] = useState("");
	return (
		<>
			<div className="container">
				<Header />
				<Heading1 />
				<GenreList genres={genres} selectedGenre={currentGenre} updateCurrentGenre={setCurrentGenre}/>
				<Heading2 selectedGenre={currentGenre}/>
				<MovieList selectedGenre={currentGenre} movies={movies}/>
				<Footer />
			</div>
		</>
	);
}

export default App
