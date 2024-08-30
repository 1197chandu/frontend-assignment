import { useSelector } from "react-redux";

const MovieList = () => {
  const { movies, loading, error, currentYear } = useSelector(
    (state) => state.movie
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h3>{currentYear}</h3>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
