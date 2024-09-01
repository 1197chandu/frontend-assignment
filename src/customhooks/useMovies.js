import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, fetchMovies } from "../redux/movieSlice";

const useMovies = () => {
  const dispatch = useDispatch();
  const { currentYear, selectedGenres } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchMovies({ year: currentYear, genres: selectedGenres }));
  }, [dispatch, currentYear, selectedGenres]);
};

export default useMovies;
