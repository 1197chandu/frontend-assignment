import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGenre, deselectGenre } from "../../redux/movieSlice";

const GenreFilter = () => {
  const dispatch = useDispatch();
  const { genres, selectedGenres } = useSelector((state) => state.movie);

  const handleToggleGenre = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      dispatch(deselectGenre(genreId));
    } else {
      dispatch(selectGenre(genreId));
    }
  };

  return (
    <div className="genre-filter">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => handleToggleGenre(genre.id)}
          className={selectedGenres.includes(genre.id) ? "selected" : ""}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
