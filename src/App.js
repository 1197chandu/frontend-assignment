import "./App.css";
import "./components/Header/Header.css";
import "./components/MovieList/MovieList.css";
import "./components/GenreFilter/GenreFilter.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import GenreFilter from "./components/GenreFilter/GenreFilter";
import useMovies from "./customhooks/useMovies";

function App() {
  useMovies();

  return (
    <div className="App">
      <Header />
      <GenreFilter />
      <MovieList />
    </div>
  );
}

export default App;
