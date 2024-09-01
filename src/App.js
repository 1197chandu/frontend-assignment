import "./App.css";
import "./components/Header/Header.css";
import "./components/MovieList/MovieList.css";
import "./components/GenreFilter/GenreFilter.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGenres, fetchMovies } from "./redux/movieSlice";
import GenreFilter from "./components/GenreFilter/GenreFilter";

function App() {
  const dispatch = useDispatch();
  const { currentYear, selectedGenres } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchMovies({ year: currentYear, genres: selectedGenres }));
  }, [dispatch, currentYear, selectedGenres]);

  return (
    <div className="App">
      <Header />
      <GenreFilter />
      <MovieList />
    </div>
  );
}

export default App;
