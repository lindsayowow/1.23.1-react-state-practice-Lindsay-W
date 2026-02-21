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

// front page:  top of the page a blank "my movie list".  second: list of genre buttons in list format. 
// third:  a 'show all" option to clear genre filters bottom: all movies listed in movies.js using .name each in a button format   
// to accomplish this need to pull all of the object.names from genres.js - does this use the map function?
//buttons have event listeners that work on click and change the screen somehow with useState ability.
//when a genre button is clicked the screen refresh will filter the movies.js file by .genre to filter for corresponding movies.
//if the user chooses another genre button, the screen will refilter the data by that .genre and not add any movie to the list
//if the user chooses a movie, then the click will fire 'my movie list' at the top to be updated with the title of the movie. (movie added to the my movie array list)
//setup:  files: genres.js - array with list of objects with property "name": "genreName"
//movies.js - array with list of objects with movie that has property "genre": "genreName" and name: "movieName"
//GenreList.jsx -- shell for the buttons html, maybe the function for the filter by genre? need to pull in and define "genreName"
//Movies.jsx - maybe the function for the filter by genre lives here?  also defining the movies by object.name from movies.js
//Header.jsx - component for header html
//Footer.jsx -component for footer html
//App.css -styling for App.jsx
//index.css - global styling.
//index.html - what displays on the browser - pulls in App.jsx
//main.html - I think this is a helper file?
//App.jsx - adds some structure to the html. pulls in Header.jsx, Footer.jsx, Movies.jsx and Genrelist.jsx.  maybe create the <ul> here with the movie names.
// other components for helper functions I have not thought of yet?



import Header from './components/Header'
import Footer from './components/Footer'
import GenreList from './components/GenreList';
import MovieList from './components/MovieList';
import { genres } from './mock-data/genres';
import { movies } from './mock-data/movies';
import './App.css'



function App() {
    return (
    <>
    <div className="container">
    <Header />
	<GenreList />
	<MovieList />
	<Footer />
      </div>
    </>
  );
}

export default App
