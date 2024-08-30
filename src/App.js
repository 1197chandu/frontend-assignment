import "./App.css";
import "./components/Header/Header.css";
import "./components/MovieList/MovieList.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "./redux/movieSlice";

function App() {
  const dispatch = useDispatch();
  const { currentYear, selectedGenres } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies({ year: currentYear, genres: selectedGenres }));
  }, [dispatch, currentYear, selectedGenres]);

  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
